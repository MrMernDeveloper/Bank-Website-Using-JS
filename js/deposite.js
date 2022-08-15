
//step-1: add event handler to the deosite button
document.getElementById('button-deposite').addEventListener('click', function () {
    // get the deposite amount from the deposite input field
    const depositeText = document.getElementById('deposite-email');
    const depositeAmount = depositeText.value;
   

    // get the current deposite total
    const desposElement = document.getElementById('deposite-total');
    const depositeTotal = desposElement.innerText;
    desposElement.innerText = depositeAmount;
})