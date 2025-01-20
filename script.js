
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e)=>{
    let userInput = document.getElementById('username').value;
    let userPassword = document.getElementById('password').value;

    if(userInput === '' || userPassword === ''){
        e.preventDefault(); // Prevent form submission
        alert('Both fields are required!')
    }
});
