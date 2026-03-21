import { SmsNotifier, type ISmsConfig } from "./smsNotifier";
import { PushNotifier, type IPushConfig } from "./pushNotifier";
import { EmailNotifier, type IEmailConfig } from "./emailNotifier";
import { SlackNotifier, type ISlackConfig } from "./slackNotifier";

export type NotificationType = "email" | "sms" | "push" | "slack";

export interface INotificationPayload {
    to: string;
    message: string;
    subject?: string;
};

export interface INotifier {
    send: (payload: INotificationPayload) => Promise<void>;
};

export class NotifierFactory {
    constructor(
        private readonly smsConfig: ISmsConfig,
        private readonly pushConfig: IPushConfig,
        private readonly emailConfig: IEmailConfig,
        private readonly slackConfig: ISlackConfig,
    ) {};

    create(type: NotificationType): INotifier {
        switch (type) {
            case "sms": return new SmsNotifier(this.smsConfig);
            case "push": return new PushNotifier(this.pushConfig);
            case "email": return new EmailNotifier(this.emailConfig);
            case "slack": return new SlackNotifier(this.slackConfig);
            default: throw new Error(`Unsupported notification type: ${type}`);
        };
    };
};

export class NotificationService {
    constructor(private readonly notifierFactory: NotifierFactory) {};

    async sendNotification(
        type: NotificationType,
        payload: INotificationPayload,
    ): Promise<void> {
        const notifier = this.notifierFactory.create(type);
        await notifier.send(payload);
    };
};
