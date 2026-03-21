"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotifier = void 0;
class EmailNotifier {
    async send(payload) {
        if (!payload.subject)
            throw new Error("Email notification required a subject!");
        console.log(`[EMAIL]`);
        console.log(`To: ${payload.to}`);
        console.log(`Subject: ${payload.subject}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    }
    ;
}
exports.EmailNotifier = EmailNotifier;
;
//# sourceMappingURL=emailNotifier.js.map