import "dotenv/config";
import { factory } from "./bootstrap";
import { NotificationService } from "./notifications/notifier";

const main = async () => {
    const notificationService = new NotificationService(factory);

    await notificationService.sendNotification("email", {
        to: process.env.FROM_ADDRESS,
        subject: "Hope this email finds you well...",
        message: "Dear Marko, you have been promoted to CEO. Enjoy!",
    });

    await notificationService.sendNotification("email", {
        to: process.env.FROM_ADDRESS,
        subject: "Required field for emails :)",
        message: "Helo from the other side!",
    });

    await notificationService.sendNotification("push", {
        to: process.env.PHONE_NUMBER,
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

    await notificationService.sendNotification("random", {
        to: "Marko Whatever",
        message: "hehe xd",
    })
};

try {
    main();
} catch (error) {
    console.log(`Failed to send: ${(error as Error).message}`);
}
