console.log("");
console.log("Use TS for input fields");
console.log("");

function getInputData() {
    const name = document.getElementById('username') as HTMLInputElement
    const usernameData:string = name.value;
    console.log(usernameData);

    
    const password = document.getElementById('password') as HTMLInputElement
    const passwordData:string = password.value;
    console.log(passwordData);
}