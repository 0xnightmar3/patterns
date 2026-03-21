export type DiscountType = "percentage" | "fixed" | "premium" | "bogo";

export interface IUser {
    id: string;
    isPremium: boolean;
};

export interface ICartItem {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
};

export interface ICart {
    user?: IUser;
    items: ICartItem[];
};

export interface IPricingResult {
    total: number;
    subtotal: number;
    discount: number;
    appliedStrategy: DiscountType;
};

export interface IDiscountStrategy {
    apply: (cart: ICart) => IPricingResult;
};

export type DiscountCreator = () => IDiscountStrategy;

export interface IPercentageConfig {
    percentage: number;
};

export interface IFixedConfig {
    amount: number;
};

export interface IPremiumConfig {
    percentage: number;
};
