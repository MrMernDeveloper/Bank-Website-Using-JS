
//deposite button

document.getElementById('withdraw-button').addEventListener('click', function () {
    
    //get withdraw input field value by calling function
    const withdrawAmount = getInputFieldValueById('withdraw-input');
    const previousWithdrawAmount = getTextFieldValueById('withdraw-total'); 
    const previousBalance = getTextFieldValueById('balance-total');

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('please provide a valid number')
        return;
    }
    else if (withdrawAmount > previousBalance) {
        alert('you dont have enought money')
        return
    }

    // get withdraw text field value by calling function
    
    const totalWithdraw = withdrawAmount + previousWithdrawAmount;
    getInnerTextNewValue('withdraw-total', totalWithdraw);

    // previous balance 
   
    const finalBalance = previousBalance - withdrawAmount;
    getInnerTextNewValue('balance-total', finalBalance);
    

})