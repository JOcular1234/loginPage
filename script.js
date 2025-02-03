
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e)=>{
    let userInput = document.getElementById('username').value;
    let userPassword = document.getElementById('password').value;

    if(userInput === '' || userPassword === ''){
        alert('Both fields are required!')
    }
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});
