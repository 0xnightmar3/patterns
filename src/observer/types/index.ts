export type OrderStatus = "pending" | "failed" | "shipped" | "cancelled";

export interface IOrder {
    id: string;
    totalAmount: number;
    status: OrderStatus;
    customerEmail: string;

    createdAt: Date;
    updatedAt: Date;
};

export interface IOrderStatusChangedEvent {
    orderId: string;
    totalAmount: number;
    customerEmail: string;
    currentStatus: OrderStatus;
    previousStatus: OrderStatus;

    occurredAt: Date;
};

export interface IOrderRepository {
    save: (order: IOrder) => Promise<void>;
    findById: (id: string) => Promise<IOrder | null>;
};

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
    };
};

export interface IOrderStatusObserver {
    onOrderStatusChanged: (event: IOrderStatusChangedEvent) => Promise<void>;
};
