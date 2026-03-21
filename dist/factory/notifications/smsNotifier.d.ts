import type { INotifier, INotificationPayload } from "./notifier";
export interface ISmsConfig {
    apiKey: string;
    senderId: string;
}
export declare class SmsNotifier implements INotifier {
    private readonly smsConfig;
    constructor(smsConfig: ISmsConfig);
    send(payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=smsNotifier.d.ts.map