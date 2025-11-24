console.log("");
console.log("--- Enum Datatype ---");

enum whoType {
    student="student",
    teacher="teacher",
    management="management",
    labStaff="labStaff"
}

const who:whoType = whoType.management;
console.log(who);