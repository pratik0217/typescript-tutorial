console.log("");
console.log("---! Classes in Typescript");
class Product {
    companyName;
    price;
    constructor(companyName, price) {
        this.companyName = companyName;
        this.price = price;
    }
}
var mobileProduct = new Product("iPhone 17pro max", 130000);
console.log(mobileProduct.companyName);
export {};
