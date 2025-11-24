console.log("---! DOM Handling & Typecasting.");
console.log("");
let headingEle = document.querySelector("h2"); // ! forces fully this element have in code.
console.log(headingEle?.textContent);
let anchorEle = document.querySelector("a"); // check anchor tag is existed or null 
console.log(anchorEle?.href);
// Typecasting
let paragraph = document.querySelector(".para");
console.log(paragraph.textContent);
export {};
