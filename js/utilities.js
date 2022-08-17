// add a function to get value  from input field
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
        return inputFieldValue;
    
    
   
}

// function of text field

function getTextFieldValueById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}
//inner text function

function getInnerTextNewValue(elementId, newValue) {
    const textValue = document.getElementById(elementId);
    textValue.innerText = newValue;
}

