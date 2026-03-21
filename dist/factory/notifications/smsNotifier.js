"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotifier = void 0;
;
class SmsNotifier {
    smsConfig;
    constructor(smsConfig) {
        this.smsConfig = smsConfig;
    }
    ;
    async send(payload) {
        console.log(`[SMS]`);
        console.log(`Sender ID: ${this.smsConfig.senderId}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    }
    ;
}
exports.SmsNotifier = SmsNotifier;
;
//# sourceMappingURL=smsNotifier.js.map