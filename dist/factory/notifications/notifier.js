"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const smsNotifier_1 = require("./smsNotifier");
const pushNotifier_1 = require("./pushNotifier");
const emailNotifier_1 = require("./emailNotifier");
const slackNotifier_1 = require("./slackNotifier");
;
;
class NotificationFactory {
    static create(type) {
        switch (type) {
            case "email": return new emailNotifier_1.EmailNotifier();
            case "sms": return new smsNotifier_1.SmsNotifier();
            case "push": return new pushNotifier_1.PushNotifier();
            case "slack": return new slackNotifier_1.SlackNotifier();
            default: throw new Error(`Unsupported notification type: ${type}`);
        }
        ;
    }
    ;
}
;
class NotificationService {
    async sendNotification(type, payload) {
        const notifier = NotificationFactory.create(type);
        await notifier.send(payload);
    }
    ;
}
exports.NotificationService = NotificationService;
;
//# sourceMappingURL=notifier.js.map