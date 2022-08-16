
//step-1: add event handler to the deosite button
document.getElementById('button-deposite').addEventListener('click', function () {
 
   

    // get the deposite amount from the deposite input field
    const depositeText = document.getElementById('deposite-email');
    const newDepositeAmount = parseFloat(depositeText.value);
    console.log(typeof newDepositeAmount);
   

    // get the current deposite total
    const desposElement = document.getElementById('deposite-total');
    const previousDepositeTotal = parseFloat(desposElement.innerText);
    const depositeTotal = newDepositeAmount + previousDepositeTotal
    desposElement.innerText = depositeTotal;
    
    // get balance current total
    const balancetext = document.getElementById('total-balance');
    const balanceTotal = parseFloat(balancetext.innerText);
    const currentBalance = balanceTotal + newDepositeAmount;
    balancetext.innerText = currentBalance;

   // clear deposite text
    depositeText.value = ''
})