console.log("");
console.log("--- Enum Datatype ---");
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labStaff";
})(whoType || (whoType = {}));
const who = whoType.management;
console.log(who);
export {};
