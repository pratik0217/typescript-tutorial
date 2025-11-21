console.log("");
console.log("Use TS for input fields");
console.log("");
function getInputData() {
    const name = document.getElementById('username');
    const usernameData = name.value;
    console.log(usernameData);
    const password = document.getElementById('password');
    const passwordData = password.value;
    console.log(passwordData);
}
export {};
