//add clic handler in withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    
    //get text value from text field
    const withdrawField = document.getElementById('withdraw-email');
    const newWithdraw = parseFloat(withdrawField.value);
    
   
    if (isNaN(newWithdraw) || newWithdraw <=0) {
        alert('Please input your amount in valid number')
        return;
    }

    //set withdraw field clear
    withdrawField.value = '';

    //calculate withdraw
    const withdrawText = document.getElementById('withdraw-field');
    const withdrawTotal = parseFloat(withdrawText.innerText);
    

    // input previous  balance
    const balance = document.getElementById('total-balance');
    const previousBalance = parseFloat(balance.innerText)


    //condition
    if (newWithdraw > previousBalance) {
        alert('You dont have enought money');
        return;
        
    }

    //calculate total withdraw
    const totalWithdraw = newWithdraw + withdrawTotal;
    withdrawText.innerText = totalWithdraw;

    //calculate final balance
    const finalBalance = previousBalance - newWithdraw;
    balance.innerText = finalBalance; 

})