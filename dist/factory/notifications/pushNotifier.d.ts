import type { INotificationPayload, INotifier } from "./notifier";
export interface IPushConfig {
    appId: string;
}
export declare class PushNotifier implements INotifier {
    private readonly pushConfig;
    constructor(pushConfig: IPushConfig);
    send(payload: INotificationPayload): Promise<void>;
}
//# sourceMappingURL=pushNotifier.d.ts.map