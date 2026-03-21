import { calculateSubtotal, roundMoney } from "../../utils";
import type { ICart, IDiscountStrategy, IPercentageConfig, IPricingResult } from "../../types";

export class PercentageDiscount implements IDiscountStrategy {
    constructor(private readonly config: IPercentageConfig) {};

    apply(cart: ICart): IPricingResult {
        const subtotal = roundMoney(calculateSubtotal(cart));
        const discount = roundMoney(subtotal * this.config.percentage / 100);
        const total = roundMoney(subtotal - discount);

        return {
            total,
            subtotal,
            discount,
            appliedStrategy: "percentage",
        };
    };
};
