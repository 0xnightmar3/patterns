import type { INotifier, INotificationPayload } from "./notifier";

export interface ISmsConfig {
    apiKey: string;
    senderId: string;
};

export class SmsNotifier implements INotifier {
    constructor(private readonly smsConfig: ISmsConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        console.log(`[SMS]`);
        console.log(`Sender ID: ${this.smsConfig.senderId}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
