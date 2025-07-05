import { Invoice } from "./invoice";
import { Product, Order } from "./Orders";
import { PaymentProcessor } from "./PaymentProcessor";
import { PricingCalculator } from "./PricingCalculator";

const product1 = new Product("1", "procuct one", 100);

const product2 = new Product("1", "procuct laptop", 1030);

const order = new Order();

order.addProducts(product1);
order.addProducts(product2);

const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);




