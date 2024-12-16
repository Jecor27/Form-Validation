//selecting forms and error displays byu the ID
const registrationForm = document.getElementById("registration");
//console.log(registrationForm);
const loginForm = document.getElementById("login");
//console.log(loginForm);
const errorDisplay = document.getElementById("errorDisplay");
//console.log(errorDisplay);

function showError(message){
    errorDisplay.textContent = message;
    errorDisplay.style.display="block"; 
}
//showError()

function clearError(){
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
    
}

registrationForm.addEventListener("submit", (validate) => {
    validate.preventDefault();
    const username = registrationForm.elements["username"];
    console.log(username.value);
    if (username.value === ""){
        showError("Username can not be empty.");
        return;
    } 
    const email = registrationForm.elements["email"];
    if (email.value === "" || !email.value.includes("@") || !email.value.includes(".")){
        showError("Please enter a valid email address.");
        return;
    }
    clearError();
    const password = registrationForm.elements["password"];
    if (password.value === ""){}
}); 



loginForm.addEventListener("submit", (validate2) => {
    validate2.preventDefault();
})
