import type { IOrderStatusChangedEvent, IOrderStatusObserver } from "../../types";

export class AnalyticsObserver implements IOrderStatusObserver {
    async onOrderStatusChanged(event: IOrderStatusChangedEvent): Promise<void> {
        console.log(`[Analytics]`);
        console.log(`Track event: order_status_changed`);
        console.log(`orderId: ${event.orderId} | from: ${event.previousStatus} | to: ${event.currentStatus}`);
        console.log(`Date: ${event.occurredAt}`);
        console.log(`--------------------------`);
    };
};
