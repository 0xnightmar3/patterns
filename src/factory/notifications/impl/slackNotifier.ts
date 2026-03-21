import type { INotificationPayload, INotifier, ISlackConfig } from "../../types";

export class SlackNotifier implements INotifier {
    constructor(private readonly slackConfig: ISlackConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        console.log("[SLACK]");
        console.log(`From: ${this.slackConfig.fromId}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`---------------------------`);
    };
};
