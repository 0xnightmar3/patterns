import type { INotificationPayload, INotifier, IPushConfig } from "../../types";

export class PushNotifier implements INotifier {
    constructor(private readonly pushConfig: IPushConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        console.log(`[PUSH]`);
        console.log(`App: ${this.pushConfig.appId}`);
        console.log(`Device/User ID: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
