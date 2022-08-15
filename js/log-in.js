//added add event handler in submit button
document.getElementById('button-submit').addEventListener('click', function () {
    

// step 2 . get input from input text
    //get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // dont verify email and password on the client site
    if (email == 'admin@gmail.com' && password == 'admin') {
        console.log('valid user')
    }
    else {
        console.log('invalid Users')
    }
})



