import type { IFixedConfig, IPercentageConfig, IPremiumConfig } from "./types";
import { DiscountStrategy } from "./discount/discount";
import { PercentageDiscount } from "./discount/impl/percentageDiscount";
import { FixedStrategy } from "./discount/impl/fixedDiscount";
import { PremiumStrategy } from "./discount/impl/premiumDiscount";

const percentageConfig: IPercentageConfig = {
    percentage: 20,
};

const fixedConfig: IFixedConfig = {
    amount: 100,
};

const premiumConfig: IPremiumConfig = {
    percentage: 50,
};

export const discountStrategy = new DiscountStrategy();
discountStrategy.register("fixed", () => new FixedStrategy(fixedConfig));
discountStrategy.register("premium", () => new PremiumStrategy(premiumConfig));
discountStrategy.register("percentage", () => new PercentageDiscount(percentageConfig));