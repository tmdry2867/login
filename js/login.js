const loginForm = document.querySelector("#login-form");
const id = document.querySelector("#login-id");
const pw = document.querySelector("#login-pw");



function handleLogin(event){
    event.preventDefault();
    const id = event.target[0].value;
    const pw = event.target[1].value;
    const r_pw = event.target[2].value;

    
}

loginForm.addEventListener("submit", handleLogin);