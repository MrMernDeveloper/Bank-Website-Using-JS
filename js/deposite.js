
//deposite
document.getElementById('button-deposite').addEventListener('click', function () {
    //get value from deposite button
    const inputDeposite = document.getElementById('deposite-email');
    const depositeAmount = parseFloat(inputDeposite.value);
    inputDeposite.value = '';

    if (isNaN(depositeAmount) || depositeAmount<=0 ) {
        return alert('please input valid a number');
    }
    
    // get value from deposite amount
    const depositeText = document.getElementById('deposite-total');
    const depositeCount = parseFloat(depositeText.innerText);

    // calculate deposite amount
    const totalDeposite = depositeAmount + depositeCount;
    depositeText.innerText = totalDeposite;

    //input balance
    const balanceField = document.getElementById('total-balance');
    const balaceAmount = parseFloat(balanceField.innerText);
    const totalBalance = depositeAmount + balaceAmount;
    balanceField.innerText = totalBalance;

})