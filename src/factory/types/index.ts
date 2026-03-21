export type NotificationType = "email" | "sms" | "push" | "slack" | "random";

export interface INotificationPayload {
    to: string;
    message: string;
    subject?: string;
};

export interface INotifier {
    send: (payload: INotificationPayload) => Promise<void>;
};

export type NotifierCreator = () => INotifier;

export interface IEmailConfig {
    smtpHost: string;
    smtpPort: number;
    fromAddress: string;
};

export interface IPushConfig {
    appId: string;
};

export interface ISlackConfig {
    fromId: string;
};

export interface ISmsConfig {
    apiKey: string;
    senderId: string;
};

export interface IRandomConfig {
    zipCode: number;
    country: string;
};
