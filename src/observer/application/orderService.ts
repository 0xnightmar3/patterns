import { IOrder, IOrderStatusChangedEvent, NotFoundError, type IOrderRepository, type OrderStatus } from "../types";
import type { OrderStatusSubject } from "../infrastructure/orderStatusSubject";

export class OrderService {
    constructor(
        private readonly orderSubject: OrderStatusSubject,
        private readonly orderRepository: IOrderRepository,
    ) {};

    async updateOrderStatus(orderId: string, nextStatus: OrderStatus) {
        const order = await this.orderRepository.findById(orderId);
        if (!order) throw new NotFoundError(`Order id ${orderId} was not found.`);
        if (order.status === nextStatus) return order;

        const previousStatus = order.status;
        const updatedOrder: IOrder = {
            ...order,
            status: nextStatus,
            updatedAt: new Date(),
        };

        await this.orderRepository.save(updatedOrder);

        const event: IOrderStatusChangedEvent = {
            orderId,
            previousStatus,
            currentStatus: updatedOrder.status,
            totalAmount: updatedOrder.totalAmount,
            customerEmail: updatedOrder.customerEmail,
            occurredAt: updatedOrder.updatedAt,
        };

        await this.orderSubject.notify(event);

        return updatedOrder;
    };
};
