/*
 * Notification system:
 * - email
 * - sms
 * - push
 */
import { NotificationService } from "./notifications";

const main = async () => {
    const notificationService = new NotificationService();

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
};

try {
    main();
} catch (error) {
    console.log(`Failed to send: ${(error as Error).message}`);
}
