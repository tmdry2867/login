const loginForm = document.querySelector("#login-form");



function handleMemberJoin(event){
    event.preventDefault();
    const id = event.target[0].value;
    const pw = event.target[1].value;
    const r_pw = event.target[2].value;

    if(id === "" || pw === "" || r_pw === ""){
        console.log("no");
    }else {
        if(pw !== r_pw){
            console.log("not match");
        }else{
            localStorage.setItem("id", id);
            localStorage.setItem("pw", pw);
            location.href="C:\\Users\\Default\\Documents\\login\\login.html";
        }
    }
}

loginForm.addEventListener("submit", handleMemberJoin);