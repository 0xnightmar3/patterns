/*
 * Notification system:
 * - email
 * - sms
 * - push
 */
import "dotenv/config";
import { ISmsConfig } from "./notifications/smsNotifier";
import { IPushConfig } from "./notifications/pushNotifier";
import { IEmailConfig } from "./notifications/emailNotifier";
import { ISlackConfig } from "./notifications/slackNotifier";
import { NotificationService, NotifierFactory } from "./notifications/notifier";

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

const main = async () => {
    const notifierFactory = new NotifierFactory(smsConfig, pushConfig, slackConfig, emailConfig);

    const notificationService = new NotificationService(notifierFactory);

    await notificationService.sendNotification("email", {
        to: "marko.lazic@igt.com",
        subject: "Hope this email finds you well...",
        message: "Dear Marko, you have been promoted to CEO. Enjoy!",
    });

    await notificationService.sendNotification("email", {
        to: "marko.lazic@igt.com",
        subject: "Required field for emails :)",
        message: "Helo from the other side!",
    });

    await notificationService.sendNotification("push", {
        to: "+381666330051",
        message: "New notification. Swipe to show the full version!",
    });

    await notificationService.sendNotification("sms", {
        to: "marko@arch",
        message: "Hello to your Arch machine. Btw, I use Gentoo.",
    });

    await notificationService.sendNotification("slack", {
        to: "Mare",
        message: "Hey, have a minute to talk about a bug I encountered?",
    });
};

try {
    main();
} catch (error) {
    console.log(`Failed to send: ${(error as Error).message}`);
}
