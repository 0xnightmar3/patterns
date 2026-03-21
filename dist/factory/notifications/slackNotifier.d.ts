import type { INotificationPayload, INotifier } from "./notifier";
export interface ISlackConfig {
    fromId: string;
}
export declare class SlackNotifier implements INotifier {
    private readonly slackConfig;
    constructor(slackConfig: ISlackConfig);
    send(payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=slackNotifier.d.ts.map