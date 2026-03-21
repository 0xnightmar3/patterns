import type { ICart } from "../types";

export const calculateSubtotal = (cart: ICart): number =>
    cart.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);

export const roundMoney = (value: number): number =>
    Math.round(value * 100) / 100;
