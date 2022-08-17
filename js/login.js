//submit button 
document.getElementById('button-submit').addEventListener('click', function () {
    const inputEmail = document.getElementById('user-email');
    const emailField = inputEmail.value;
    const inputPassword = document.getElementById('user-password');
    const inputField = inputPassword.value;
    inputEmail.value = '';
    inputPassword.value = '';

    if (emailField == 'admin@gmail.com' && inputField == 'admin') {
        window.location.href = 'bank.html';
    }
    else {

        return alert('Wrong user email and password');
    }

})