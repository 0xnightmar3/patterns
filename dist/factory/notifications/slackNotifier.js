"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackNotifier = void 0;
class SlackNotifier {
    async send(payload) {
        console.log("[SLACK");
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
    }
    ;
}
exports.SlackNotifier = SlackNotifier;
;
//# sourceMappingURL=slackNotifier.js.map