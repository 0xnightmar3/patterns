"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const _1 = require(".");
;
;
class NotificationFactory {
    static create(type) {
        switch (type) {
            case "email": return new _1.EmailNotifier();
            case "sms": return new _1.SmsNotifier();
            case "push": return new _1.PushNotifier();
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