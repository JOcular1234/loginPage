
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitbtn');
const handleUserNameError = document.getElementById('handleUserNameError');
const handleUserPasswordError = document.getElementById('handlePasswordError');
const handleBothError = document.getElementById('handleBothError')
let password = document.getElementById('password');
let revealPassword = document.getElementById('eye');


loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
    
    const userInput = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;

    if(!userInput){
        handleUserNameError.innerHTML='Please fill in your Username!';
    }if(!userPassword){
        handleUserPasswordError.innerHTML='Please fill in your password!'
    }if(userInput === '' && userPassword === ''){
        handleBothError.innerHTML='Empty fields detected. please fill in all required fields to proceed'

    }
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

function hide() {
    if (password.type == 'password') {
        password.type = 'text';
        revealPassword.className = 'fa-solid fa-eye-slash';
    }else{
        password.type = 'password';
        revealPassword.className = 'fa-solid fa-eye'
    }
}