
// get value from withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    
    // get value from deposite input field
    const depositField = document.getElementById('withdraw-input');
    const depositString = depositField.value;
    const depositeAmount = parseFloat(depositString);

     // clear deposit field
    depositField.value = '';

    //error handling
    if (isNaN(depositeAmount) || depositeAmount <= 0) {
        return alert('please input a valid number');
    }

    // get value from withdraw field

    const depositeText = document.getElementById('withdraw-total');
    const previousDepositString = depositeText.innerText;
    const previousDeposite = parseFloat(previousDepositString);

 

    // get balance text
    const balanceText = document.getElementById('balance-total');
    const previousBalanceString = balanceText.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if (depositeAmount > previousBalance) {
        
        return alert('You dont have enough money')
    }

    //calculate total deposite
    const totalDeposit = depositeAmount + previousDeposite;
    depositeText.innerText = totalDeposit;

    // calculate finalBalance
    const finalBalance = previousBalance - depositeAmount;
    balanceText.innerText = finalBalance;
})