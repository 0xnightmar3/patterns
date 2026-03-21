import { calculateSubtotal, roundMoney } from "../../utils";
import type { ICart, IDiscountStrategy, IFixedConfig, IPricingResult } from "../../types";

export class FixedStrategy implements IDiscountStrategy {
    constructor(private readonly config: IFixedConfig) {};

    apply(cart: ICart): IPricingResult {
        const subtotal = roundMoney(calculateSubtotal(cart));
        const discount = roundMoney(subtotal - this.config.amount);
        const total = roundMoney(subtotal - discount);

        return {
            total,
            subtotal,
            discount,
            appliedStrategy: "fixed",
        };
    };
};
