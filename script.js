
const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitbtn');
const handleUserNameError = document.getElementById('handleUserNameError');
const handleUserPasswordError = document.getElementById('handlePasswordError');
const handleBothError = document.getElementById('handleBothError')

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