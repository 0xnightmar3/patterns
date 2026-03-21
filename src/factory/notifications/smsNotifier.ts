import type { INotifier, INotificationPayload } from "./index";

export class SmsNotifier implements INotifier {
    async send(payload: INotificationPayload): Promise<void> {
        console.log(`[SMS]`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
