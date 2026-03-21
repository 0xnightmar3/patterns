import type { ICart } from "./types";
import { discountStrategy } from "./bootstrap";
import { DiscountService } from "./discount/discount";

const cart: ICart = {
    items: [
        { id: "1", name: "Riba", unitPrice: 20, quantity: 12 },
        { id: "2", name: "Auto", unitPrice: 55, quantity: 3 },
        { id: "3", name: "Pesak", unitPrice: 3, quantity: 200 },
        { id: "4", name: "Una", unitPrice: 10000, quantity: 1 },
    ],
    user: {
        id: "bozo",
        isPremium: true,
    },
};

const main = () => {
    const discountService = new DiscountService(discountStrategy);

    try {
        const discountedPrice = discountService.calculate(cart, "percentage");
        console.log(discountedPrice);
        const fixedDiscount = discountService.calculate(cart, "fixed");
        console.log(fixedDiscount);
        const premiumDiscounted = discountService.calculate(cart, "premium");
        console.log(premiumDiscounted);
        const bogoDiscounted = discountService.calculate(cart, "bogo");
        console.log(bogoDiscounted);
    } catch (error) {
        console.log(`${(error as Error).message}`);
    }
};

main();