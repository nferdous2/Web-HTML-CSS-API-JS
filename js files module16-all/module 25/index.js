document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value
    //get password
    const passField = document.getElementById('user-password');
    const userPassword = passField.value
   //emial is valid
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
})
