export type NotificationType = "email" | "sms" | "push" | "slack";
export interface INotificationPayload {
    to: string;
    message: string;
    subject?: string;
}
export interface INotifier {
    send: (payload: INotificationPayload) => Promise<void>;
}
export declare class NotificationService {
    sendNotification(type: NotificationType, payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=notifier.d.ts.map