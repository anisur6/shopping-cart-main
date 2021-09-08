// //function for increase & decrease button
// function updateCaseNumber(isIncreasing) {
//     const caseInput = document.getElementById('phone-input');
//     let caseNumber = caseInput.value;



//     if (isIncreasing == true && caseNumber < 5) {
//         caseNumber = parseInt(caseNumber) + 1;
//     }
//     else if (isIncreasing == false && caseNumber > 0) {
//         caseNumber = parseInt(caseNumber) - 1;
//     }

//     caseInput.value = caseNumber;

//     //handle case
//     const caseTotal = document.getElementById('phone-total');
//     caseTotal.innerText = caseNumber * 1219;
// }


function updateTotalField(inputId, isIncreasing, subTotal, amount) {
    totalInput = document.getElementById(inputId)
    let totalNumber = totalInput.value;

    if (isIncreasing == true) {
        totalNumber = parseInt(totalNumber) + 1;
    }
    else if (isIncreasing == false && totalNumber > 0) {
        totalNumber = parseInt(totalNumber) - 1;
    }
    totalInput.value = totalNumber;

    //subtotal add
    const subTotalinput = document.getElementById(subTotal);
    subTotalinput.innerText = totalNumber * amount;
}

    function getInputValue(inputId) {
        const totalInput = document.getElementById(inputId);
        let totalNumber = totalInput.value;
        return totalNumber;
    }

    function updateTotalPrice() {
        const phoneTotal = getInputValue('phone-input') * 1219;
        const caseTotal = getInputValue('case-input') * 59;
        const subTotal = phoneTotal + caseTotal;
        const taxamout = parseFloat(subTotal * 5 / 100);
        const total = subTotal + taxamout;

        //update on html file
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = taxamout;
        document.getElementById('main-total').innerText = total;

    }

//handle increase button
document.getElementById('phone-plus').addEventListener('click', function () {
    updateTotalField('phone-input', true, 'phone-total', 1219);
    updateTotalPrice();
});

// handle increase button 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateTotalField('phone-input', false, 'phone-total', 1219);
    updateTotalPrice()
})

//handle case increase button
document.getElementById('case-plus').addEventListener('click', function () {
    updateTotalField('case-input', true, 'case-total', 59);
    updateTotalPrice();
});

// handle case increase button 
document.getElementById('case-minus').addEventListener('click', function () {
    updateTotalField('case-input', false, 'case-total', 59);
    updateTotalPrice();
})