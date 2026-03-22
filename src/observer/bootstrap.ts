import "dotenv/config";
import { OrderService } from "./application/orderService";
import { EmailObserver } from "./infrastructure/observers/emailObserver";
import { OrderStatusSubject } from "./infrastructure/orderStatusSubject";
import { InMemoryOrderRpository } from "./repository/inMemoryOrderRepository";
import { AnalyticsObserver } from "./infrastructure/observers/analyticsObserver";

const emailObserver = new EmailObserver();
const analyticsObserver = new AnalyticsObserver();

const orderRpository = new InMemoryOrderRpository();

orderRpository.seed({
    totalAmount: 12,
    status: "pending",
    id: "123-as123-as123-z",
    customerEmail: process.env.FROM_ADDRESS,

    createdAt: new Date(),
    updatedAt: new Date(),
});

const orderSubject = new OrderStatusSubject();
orderSubject.subscribe(emailObserver);
orderSubject.subscribe(analyticsObserver);

export const orderService = new OrderService(orderSubject, orderRpository);
