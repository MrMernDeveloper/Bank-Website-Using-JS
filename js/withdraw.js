//add clic handler in withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get text value from text field
    const withdrawField = document.getElementById('withdraw-email');
    const newWithdraw = parseFloat(withdrawField.value);

    //calculate withdraw
    const withdrawText = document.getElementById('withdraw-field');
    const withdrawTotal = parseFloat(withdrawText.innerText);
    const totalWithdraw = newWithdraw + withdrawTotal;
    withdrawText.innerText = totalWithdraw;

    // substract withdraw from balance
    const balance = document.getElementById('total-balance');
    const previousBalance = parseFloat(balance.innerText)
    const finalBalance = previousBalance - newWithdraw;
    balance.innerText = finalBalance;




//set withdraw field clear

    withdrawField.value = '';
   

})