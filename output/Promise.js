function printName(name) {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log(name);
            res("SuccessFull");
        }, 3000);
    });
}
printName("Pratik").then(res => {
    console.log(res);
});
export {};
// console.log("Jadhav");
