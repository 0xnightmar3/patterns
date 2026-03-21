import type { INotifier, INotificationPayload, IEmailConfig } from "../../types";

export class EmailNotifier implements INotifier {
    constructor(private readonly config: IEmailConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        if (!payload.subject) throw new Error("Email notification required a subject!");
        console.log(`[EMAIL]`);
        console.log(`SMTP host: ${this.config.smtpHost}`);
        console.log(`From: ${this.config.fromAddress}`);
        console.log(`To: ${payload.to}`);
        console.log(`Subject: ${payload.subject}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    };
};
