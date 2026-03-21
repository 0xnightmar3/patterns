import { EmailNotifier, SmsNotifier, PushNotifier } from ".";

export type NotificationType = "email" | "sms" | "push";

export interface INotificationPayload {
    to: string;
    message: string;
    subject?: string;
};

export interface INotifier {
    send: (payload: INotificationPayload) => Promise<void>;
};

class NotificationFactory {
    static create(type: NotificationType): INotifier {
        switch (type) {
            case "email": return new EmailNotifier();
            case "sms": return new SmsNotifier();
            case "push": return new PushNotifier();
            default: throw new Error(`Unsupported notification type: ${type}`);
        };
    };
};

export class NotificationService {
    async sendNotification(
        type: NotificationType,
        payload: INotificationPayload,
    ): Promise<void> {
        const notifier = NotificationFactory.create(type);
        await notifier.send(payload);
    };
};
