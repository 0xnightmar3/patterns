import type { IOrderStatusChangedEvent, IOrderStatusObserver } from "../../types";

export class EmailObserver implements IOrderStatusObserver {
    async onOrderStatusChanged(event: IOrderStatusChangedEvent): Promise<void> {
        console.log(`[EMAIL]`);
        console.log(`To: ${event.customerEmail}`);
        console.log(`Message: Your order ${event.orderId} status changed from ${event.previousStatus} to ${event.currentStatus}`);
        console.log(`Change occured on: ${event.occurredAt}`);
        console.log(`---------------------------------`);
    };
};
