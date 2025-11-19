// Syntax format = keyword varibaleName : datatype = value;
var number = 25;
console.log(number);
// Redeclare issue 
// let num: number = 10;
// Add number with datatype
var physics = 75;
var chemistry = 80;
var maths = 65;
var totalMarkPCM = physics + chemistry + maths;
console.log("Totak Marks(PCM) : ".concat(totalMarkPCM, "/300"));
// Use Binary and hexadecimal numbers
var binary = 10; // 10
var hexadecimal = 0xff; // 255
console.log("Binary Number : ".concat(binary, ", Hexadecimal number : ").concat(hexadecimal, "."));
// Convert string to number 
var biology = "90";
var biologyConverted = Number(biology);
// var biologyConverted:number = +biology;
var totalMarkPCB = physics + chemistry + biologyConverted;
console.log("Total marks(PCB) : ".concat(totalMarkPCB, "/300"));
console.log("TotalMarks(PCMB) : " + (physics + chemistry + maths + biologyConverted) + "/400");
//Number with Type Inference
//can skip the type if TypeScript can figure it out:
var nextLangauge = "Node.js";
console.log("Next language start to learn : ".concat(nextLangauge));
// Decimal with Number 
var totalMarksPCMB = physics + chemistry + maths + biologyConverted;
var percentage = totalMarksPCMB * 100 / 400;
console.log("Percentage PCMB : ".concat(percentage));
