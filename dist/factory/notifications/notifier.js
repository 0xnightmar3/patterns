"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.NotifierFactory = void 0;
const smsNotifier_1 = require("./smsNotifier");
const pushNotifier_1 = require("./pushNotifier");
const emailNotifier_1 = require("./emailNotifier");
const slackNotifier_1 = require("./slackNotifier");
;
;
class NotifierFactory {
    smsConfig;
    pushConfig;
    emailConfig;
    slackConfig;
    constructor(smsConfig, pushConfig, emailConfig, slackConfig) {
        this.smsConfig = smsConfig;
        this.pushConfig = pushConfig;
        this.emailConfig = emailConfig;
        this.slackConfig = slackConfig;
    }
    ;
    create(type) {
        switch (type) {
            case "sms": return new smsNotifier_1.SmsNotifier(this.smsConfig);
            case "push": return new pushNotifier_1.PushNotifier(this.pushConfig);
            case "email": return new emailNotifier_1.EmailNotifier(this.emailConfig);
            case "slack": return new slackNotifier_1.SlackNotifier(this.slackConfig);
            default: throw new Error(`Unsupported notification type: ${type}`);
        }
        ;
    }
    ;
}
exports.NotifierFactory = NotifierFactory;
;
class NotificationService {
    notifierFactory;
    constructor(notifierFactory) {
        this.notifierFactory = notifierFactory;
    }
    ;
    async sendNotification(type, payload) {
        const notifier = this.notifierFactory.create(type);
        await notifier.send(payload);
    }
    ;
}
exports.NotificationService = NotificationService;
;
//# sourceMappingURL=notifier.js.map