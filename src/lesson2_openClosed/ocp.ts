
interface IPaymentProcessor {
    processPayment(amount: number): void;
}

export class PaymentProcessor {

    processor: IPaymentProcessor;


    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    processPayment(amount: number) {
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`)
    }
}


// the second principle of SOLID is open-closed principle (OCP)
// which states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// This means that you should be able to add new functionality to a class without changing its existing code.
// In this example, we can extend the PaymentProcessor class to support different payment methods without modifying the existing code.
// We can create a new class that implements the IPaymentProcessor interface and pass it to the PaymentProcessor constructor.
// This allows us to add new payment methods without changing the PaymentProcessor class itself.


class PaypalProcessor implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing paypal payment of ${amount}`);
    }
}


const credCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();

// const processor = new PaymentProcessor(credCardProcessor);
const processor = new PaymentProcessor(paypalProcessor);
processor.processPayment(1000);