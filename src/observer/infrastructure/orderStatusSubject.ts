import type { IOrderStatusChangedEvent, IOrderStatusObserver } from "../types";

export class OrderStatusSubject {
    private readonly observers: IOrderStatusObserver[] = [];

    subscribe(observer: IOrderStatusObserver): void {
        this.observers.push(observer);
    };

    async notify(event: IOrderStatusChangedEvent): Promise<void> {
        this.observers.forEach(async (observer) => await observer.onOrderStatusChanged(event));
    };
};
