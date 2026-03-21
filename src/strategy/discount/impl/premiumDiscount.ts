import { ICart, IDiscountStrategy, IPremiumConfig, IPricingResult } from "../../types";
import { calculateSubtotal, roundMoney } from "../../utils";

export class PremiumStrategy implements IDiscountStrategy {
    constructor(private readonly config: IPremiumConfig) {};

    apply(cart: ICart): IPricingResult {
        const subtotal = roundMoney(calculateSubtotal(cart));

        if (!cart.user?.isPremium) return {
            subtotal,
            discount: 0,
            total: subtotal,
            appliedStrategy: "premium",
        };

        const discount = roundMoney(subtotal * this.config.percentage / 100);
        const total = roundMoney(subtotal - discount);

        return {
            total,
            discount,
            subtotal,
            appliedStrategy: "premium",
        };
    };
};
