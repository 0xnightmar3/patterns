"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotifier = void 0;
;
class PushNotifier {
    pushConfig;
    constructor(pushConfig) {
        this.pushConfig = pushConfig;
    }
    ;
    async send(payload) {
        console.log(`[PUSH]`);
        console.log(`App: ${this.pushConfig.appId}`);
        console.log(`Device/User ID: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`----------------------`);
    }
    ;
}
exports.PushNotifier = PushNotifier;
;
//# sourceMappingURL=pushNotifier.js.map