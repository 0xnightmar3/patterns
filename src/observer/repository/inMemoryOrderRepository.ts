import type { IOrder, IOrderRepository } from "../types";

export class InMemoryOrderRpository implements IOrderRepository {
    private readonly orders = new Map<string, IOrder>;

    async findById(id: string): Promise<IOrder | null> {
        return this.orders.get(id) ?? null;
    };

    async save(order: IOrder): Promise<void> {
        this.orders.set(order.id, order);
    };

    seed(order: IOrder): void {
        this.orders.set(order.id, order);
    };
};
