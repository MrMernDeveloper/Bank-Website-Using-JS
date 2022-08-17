//get input from deposite button

document.getElementById('deposite-button').addEventListener('click', function () {

    // get deposit amount from input field
    const depositeField = document.getElementById('deposite-input');
    const depositSting = depositeField.value;
    const depositeAmount = parseFloat(depositSting);

    depositeField.value = '';

    if (isNaN(depositeAmount) || depositeAmount <= 0) {
        return alert('please input a valid number')
    }

    //  det previous deposite from deposite text
    const depositeText = document.getElementById('deposite-total');
    const textString = depositeText.innerText;
    const previousDeposite = parseFloat(textString);

   // calculate Deposit
    
    const totalDeposite = depositeAmount + previousDeposite;
    depositeText.innerText = totalDeposite;

    //get balace input from innertext balace
    const balaceText = document.getElementById('balance-total');
    const previousBalaceString = balaceText.innerText;
    const previousBalance = parseFloat(previousBalaceString);

    // calculate balance

    const totalBalance = depositeAmount + previousBalance;
    balaceText.innerText = totalBalance;
})