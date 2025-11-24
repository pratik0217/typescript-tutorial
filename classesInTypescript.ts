console.log("");
console.log("---! Classes in Typescript");

class Product {
    companyName : string;
    price:number;

    constructor(companyName:string, price:number) {
        this.companyName = companyName;
        this.price = price;
    }
}

var mobileProduct = new Product("iPhone 17pro max", 130000);

console.log(mobileProduct.companyName);