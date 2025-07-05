import { Order } from "./Orders";

export class PaymentProcessor {
    processPayment(order: Order) {
        console.log("processing payment...");
        console.log("payment processed successfully!");
        console.log("added to accounting system!");
        console.log("email send to customer");
    }
}