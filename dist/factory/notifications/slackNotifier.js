"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackNotifier = void 0;
;
class SlackNotifier {
    slackConfig;
    constructor(slackConfig) {
        this.slackConfig = slackConfig;
    }
    ;
    async send(payload) {
        console.log("[SLACK]");
        console.log(`From: ${this.slackConfig.fromId}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
    }
    ;
}
exports.SlackNotifier = SlackNotifier;
;
//# sourceMappingURL=slackNotifier.js.map