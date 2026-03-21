import type { INotifier, INotificationPayload } from "./notifier";
export interface IEmailConfig {
    smtpHost: string;
    smtpPort: number;
    fromAddress: string;
}
export declare class EmailNotifier implements INotifier {
    private readonly config;
    constructor(config: IEmailConfig);
    send(payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=emailNotifier.d.ts.map