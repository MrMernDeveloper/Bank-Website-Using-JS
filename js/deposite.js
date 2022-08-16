
//step-1: add event handler to the deosite button
document.getElementById('button-deposite').addEventListener('click', function () {
 
   

    // get the deposite amount from the deposite input field
    const depositeText = document.getElementById('deposite-email');
    const newDepositeAmount = parseFloat(depositeText.value);

    // clear deposite text
    depositeText.value = ''

    if (isNaN(newDepositeAmount) || newDepositeAmount <= 0) {
        alert('Please input your amount in valid number')
        return;
    }
    
   

    // get the current deposite total
    const desposElement = document.getElementById('deposite-total');
    const previousDepositeTotal = parseFloat(desposElement.innerText);
    
    //calculate deposite total
    const depositeTotal = newDepositeAmount + previousDepositeTotal
    desposElement.innerText = depositeTotal;
    
    // get balance current total
    const balancetext = document.getElementById('total-balance');
    const balanceTotal = parseFloat(balancetext.innerText);

    //calculate balance total
    const currentBalance = balanceTotal  + newDepositeAmount;
    balancetext.innerText = currentBalance;

  
})