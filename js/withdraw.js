
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get value from desposite text area
    const withdrawField = document.getElementById('withdraw-email');
    const withdrawAmount = parseFloat(withdrawField.value);

    //clear text area
    withdrawField.value = '';
    
    if (isNaN(withdrawAmount) || withdrawAmount <=0) {
        return alert('please input a valid number')
    }

    // get withdraw value
    const withdrawText = document.getElementById('withdraw-field');
    const previousWithDraw = parseFloat(withdrawText.innerText);

    //get balance input
    const previousBalanceText = document.getElementById('total-balance');
    const previousBalance = parseFloat(previousBalanceText.innerText);

    if (previousBalance < withdrawAmount) {
        return alert('You dont Have enought money')
    }

    //calculate total withdraw
    const totalWithdraw = withdrawAmount + previousWithDraw;
    withdrawText.innerText = totalWithdraw;

    

    //calculate final balance
    const finalBalance = previousBalance - withdrawAmount;
    previousBalanceText.innerText = finalBalance;

    
})