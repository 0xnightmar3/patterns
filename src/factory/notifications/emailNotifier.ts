import type { INotifier, INotificationPayload } from "./index";

export class EmailNotifier implements INotifier {
    async send(payload: INotificationPayload): Promise<void> {
        if (!payload.subject) throw new Error("Email notification required a subject!");
        console.log(`[EMAIL]`);
        console.log(`To: ${payload.to}`);
        console.log(`Subject: ${payload.subject}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
