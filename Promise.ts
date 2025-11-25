function printName(name:string):Promise<string> {
    return new Promise((res,reject)=> {
        setTimeout(()=> {
            console.log(name);
            res("SuccessFull");
        },3000);
    })
}

printName("Pratik").then(res=> {
    console.log(res);
});

// console.log("Jadhav");