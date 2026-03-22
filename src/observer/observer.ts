import { orderService } from "./bootstrap";

const main = async () => {
    try {
        const newOrder = await orderService.updateOrderStatus("123-as123-as123-z", "shipped");
        console.log(newOrder);
    } catch (error) {
        console.log(`${(error as Error).message}\n${(error as Error).name}`);
    }
};

main();
