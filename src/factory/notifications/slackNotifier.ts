import type { INotificationPayload, INotifier } from "./notifier";

export interface ISlackConfig {
    fromId: string;
};

export class SlackNotifier implements INotifier {
    constructor(private readonly slackConfig: ISlackConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        console.log("[SLACK]");
        console.log(`From: ${this.slackConfig.fromId}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
    };
};
