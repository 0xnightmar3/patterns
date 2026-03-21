import type { INotificationPayload, INotifier } from "./index";

export class PushNotifier implements INotifier {
    async send(payload: INotificationPayload): Promise<void> {
        console.log(`[PUSH]`);
        console.log(`Device/User ID: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
