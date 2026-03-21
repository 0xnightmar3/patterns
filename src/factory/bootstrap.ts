import { NotifierFactory } from "./notifications/notifier";
import { SmsNotifier } from "./notifications/impl/smsNotifier";
import { PushNotifier } from "./notifications/impl/pushNotifier";
import { EmailNotifier } from "./notifications/impl/emailNotifier";
import { SlackNotifier } from "./notifications/impl/slackNotifier";
import type { IEmailConfig, IPushConfig, ISmsConfig, ISlackConfig } from "./types";

const emailConfig: IEmailConfig = {
    smtpPort: process.env.SMTP_PORT,
    smtpHost: process.env.SMTP_HOST,
    fromAddress: process.env.FROM_ADDRESS,
};

const pushConfig: IPushConfig = {
    appId: process.env.APP_ID,
};

const smsConfig: ISmsConfig = {
    apiKey: process.env.API_KEY,
    senderId: process.env.SENDER_ID,
};

const slackConfig: ISlackConfig = {
    fromId: process.env.FROM_ID,
};

export const factory = new NotifierFactory();

factory.register("sms", () => new SmsNotifier(smsConfig));
factory.register("push", () => new PushNotifier(pushConfig));
factory.register("slack", () => new SlackNotifier(slackConfig));
factory.register("email", () => new EmailNotifier(emailConfig));
