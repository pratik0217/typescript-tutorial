console.log("---! DOM Handling & Typecasting.");
console.log("");

let headingEle = document.querySelector("h2")!; // ! forces fully this element have in code.
console.log(headingEle?.textContent)

let anchorEle:HTMLAnchorElement|null = document.querySelector("a"); // check anchor tag is existed or null 
console.log(anchorEle?.href);

// Typecasting
let paragraph = document.querySelector(".para")! as HTMLParagraphElement;
console.log(paragraph.textContent);