import type { INotificationPayload, INotifier } from "./notifier";

export class SlackNotifier implements INotifier {
    async send(payload: INotificationPayload): Promise<void> {
        console.log("[SLACK");
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
    };
};
