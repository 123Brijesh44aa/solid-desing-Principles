import { Product } from "./Orders";

export class Invoice {
    generateInvoice(products: Product[], amount: number) {
        const line = "+------------+----------------------+----------+";
        const header = "| Product ID | Product Name         | Price    |";
        console.log("INVOICE");
        console.log(line);
        console.log(header);
        console.log(line);

        products.forEach(product => {
            const id = product.id.padEnd(10, ' ');
            const name = product.name.padEnd(20, ' ');
            const price = product.price.toFixed(2).toString().padStart(8, ' ');
            console.log(`| ${id} | ${name} | ${price} |`);
        });

        console.log(line);
        // Use the amount parameter instead of recalculating total
        const totalLine = `    | ${" ".repeat(23)}Total: | ${amount.toFixed(2).toString().padStart(8, ' ')} |`;
        console.log(totalLine);
        console.log(line);
    }

}