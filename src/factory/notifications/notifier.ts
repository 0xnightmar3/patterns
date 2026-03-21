import type { NotificationType, NotifierCreator, INotifier, INotificationPayload } from "../types";;

export class NotifierFactory {
    private readonly creators = new Map<NotificationType, NotifierCreator>();

    register(type: NotificationType, creator: NotifierCreator): void {
        this.creators.set(type, creator);
    };

    create(type: NotificationType): INotifier {
        const creator = this.creators.get(type);
        if (!creator) throw new Error(`Unsupported notification type: ${type}`);
        return creator();
    };
};

export class NotificationService {
    constructor(private readonly notifierFactory: NotifierFactory) {};

    async sendNotification(
        type: NotificationType,
        payload: INotificationPayload,
    ): Promise<void> {
        const notifier = this.notifierFactory.create(type);
        await notifier.send(payload);
    };
};
