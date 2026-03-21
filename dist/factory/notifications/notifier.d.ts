import { type ISmsConfig } from "./smsNotifier";
import { type IPushConfig } from "./pushNotifier";
import { type IEmailConfig } from "./emailNotifier";
import { type ISlackConfig } from "./slackNotifier";
export type NotificationType = "email" | "sms" | "push" | "slack";
export interface INotificationPayload {
    to: string;
    message: string;
    subject?: string;
}
export interface INotifier {
    send: (payload: INotificationPayload) => Promise<void>;
}
export declare class NotifierFactory {
    private readonly smsConfig;
    private readonly pushConfig;
    private readonly emailConfig;
    private readonly slackConfig;
    constructor(smsConfig: ISmsConfig, pushConfig: IPushConfig, emailConfig: IEmailConfig, slackConfig: ISlackConfig);
    create(type: NotificationType): INotifier;
}
export declare class NotificationService {
    private readonly notifierFactory;
    constructor(notifierFactory: NotifierFactory);
    sendNotification(type: NotificationType, payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=notifier.d.ts.map