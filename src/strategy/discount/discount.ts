import type { DiscountCreator, DiscountType, ICart, IDiscountStrategy, IPricingResult } from "../types";

export class DiscountStrategy {
    private readonly creators = new Map<DiscountType, DiscountCreator>();

    register(type: DiscountType, creator: DiscountCreator): void {
        if (this.creators.has(type)) throw new Error(`Discount already registered: ${type}`);
        this.creators.set(type, creator);
    };

    create(type: DiscountType): IDiscountStrategy {
        const creator = this.creators.get(type);
        if (!creator) throw new Error(`Discount not registered: ${type}`);
        return creator();
    };
};

export class DiscountService {
    constructor(private readonly discountStrategy: DiscountStrategy) {};

    calculate(cart: ICart, type: DiscountType): IPricingResult {
        const strategy = this.discountStrategy.create(type);
        return strategy.apply(cart);
    };
};
