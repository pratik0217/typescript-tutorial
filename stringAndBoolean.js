console.log("");
console.log("--- String & Boolean TS ---");
console.log("");
// Apply String Datatype
var language = "typescript";
console.log("Study Language : " + language.toUpperCase());
// Convert in string datatype
var phoneNumber = 7038302915;
// var phoneNumberConverted:string = String(phoneNumber);
var phoneNumberConverted = phoneNumber.toString();
console.log("PhoneNumber : number = " + phoneNumber);
console.log("PhoneNumberConverted : string = " + phoneNumberConverted);
if (typeof phoneNumberConverted === 'string') {
    console.log("Converted Sucessfully");
}
// Apply boolean datatype & Possiable value only True or False 
var male = true;
if (male == true) {
    console.log("Male!");
}
else {
    console.log("Female!");
}
