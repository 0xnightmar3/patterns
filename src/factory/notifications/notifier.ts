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

type NotifierCreator = () => INotifier;

export class NotifierFactory {
    private readonly creators: Record<NotificationType, NotifierCreator>;

    constructor(
        sms: ISmsConfig,
        push: IPushConfig,
        slack: ISlackConfig,
        email: IEmailConfig,
    ) {
        this.creators = {
            sms: () => new SmsNotifier(sms),
            push: () => new PushNotifier(push),
            slack: () => new SlackNotifier(slack),
            email: () => new EmailNotifier(email),
        };
    };

    create(type: NotificationType): INotifier {
        const creator = this.creators[type];
        if (!creator) throw new Error(`Unsupported notification type: ${type}`);
        return creator();
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
