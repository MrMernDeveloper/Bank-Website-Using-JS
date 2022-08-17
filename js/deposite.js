


// get value by button click
document.getElementById('deposite-button').addEventListener('click', function () {

    // get value from input field by call function
    const newDepositeAmount = getInputFieldValueById('deposite-input');

    if (isNaN(newDepositeAmount) ||  newDepositeAmount<= 0) {
        return alert('please provide a valid number');
    }

    // get value from text field by call function
    const previousDeposit = getTextFieldValueById('deposite-total');
    //calculate the total deposite
    const totalDeposite = newDepositeAmount + previousDeposit;
    //calling function for get DEPOSITE value

    getInnerTextNewValue('deposite-total', totalDeposite);
     
    // get balance  by call function
    const previousBalance = getTextFieldValueById('balance-total');
    // total balance
    const totalBalance = newDepositeAmount + previousBalance;
    // calling function for get Balance Value

    getInnerTextNewValue('balance-total', totalBalance);
    
    
   
})