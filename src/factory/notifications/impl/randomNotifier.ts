import type { INotificationPayload, IRandomConfig } from "../../types";

export class RandomNotifier {
    constructor(private readonly randomConfig: IRandomConfig) {};

    async send(payload: INotificationPayload): Promise<void> {
        console.log(`[RANDOM]`);
        console.log(`Country: ${this.randomConfig.country}`);
        console.log(`Zip code: ${this.randomConfig.zipCode}`);
        console.log(`To: ${payload.to}`);
        console.log(`Message: ${payload.message}`);
        console.log(`---------------------------`);
    };
};
