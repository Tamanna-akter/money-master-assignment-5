
// document.getElementById('calculate-button').addEventListener('click', function () {
//     const incomeText = document.getElementById('income-input');
//     const incomeAmount = (incomeText.value);
//     // incomeText.value = "";

//     const foodText = document.getElementById('food-input');
//     const foodAmount = foodText.value;
//     foodText.value = "";
//     const rentText = document.getElementById('rent-input');
//     const rentAmount = rentText.value;
//     rentText.value = "";
//     const clothesText = document.getElementById('clothes-input');
//     const clothesAmount = clothesText.value;
//     clothesText.value = "";
//     const expensesTotal = document.getElementById('expense-total');
//     const currentTotalBalance = document.getElementById('total-balance');
//     const total = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
//     expensesTotal.innerText = total;
//     currentTotalBalance.innerText = parseFloat(incomeAmount) - expensesTotal.innerText;
// });

// document.getElementById('save-button').addEventListener('click', function () {
//     const savingsInputText = document.getElementById('save-input');
//     const incomeText = document.getElementById('income-input');
//     const incomeAmount = incomeText.value;
//     const savingsPercentValue = savingsInputText.value;
//     const savings = (incomeAmount * parseInt(savingsPercentValue) / 100);
//     const savingsBalance = document.getElementById('savings-balance');
//     savingsBalance.innerText = savings;

//     const currentTotalBalance = document.getElementById('total-balance').innerText;
//     const remainingBalanceText = document.getElementById('remaining-balance');
//     const remainingBalance = remainingBalanceText.innerText;

//     const remaining = currentTotalBalance - savingsBalance.innerText;
//     remainingBalanceText.innerText = remaining;
// })

function inputField(inputFieldId) {
    const inputArea = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputArea);
    return inputValue;
}
function calculateTotal() {

    const incomeAmount = inputField('income-input');
    const foodAmount = inputField('food-input');
    const rentAmount = inputField('rent-input');
    const clothesAmount = inputField('clothes-input');

    const expenseAmount = foodAmount + rentAmount + clothesAmount;
    const balanceTotal = incomeAmount - expenseAmount;
    if (isNaN(incomeAmount) || incomeAmount < 0 || incomeAmount == "") {
        return alert('Please input valid amount of money in number format');
    }
    else if (incomeAmount < expenseAmount) {
        alert('your income balance is less than expense amount');
    }
    else if (isNaN(foodAmount) || foodAmount < 0 || foodAmount == "") {
        alert('Please input valid amount of money in number format')
    }
    else if (isNaN(rentAmount) || rentAmount < 0 || rentAmount == "") {
        alert('Please input valid amount of money in number format')
    }
    else if (isNaN(clothesAmount) || clothesAmount < 0 || foodAmount == "") {
        alert('Please input valid amount of money in number format')
    }
    else {
        document.getElementById('expense-total').innerText = expenseAmount;
        document.getElementById('total-balance').innerText = balanceTotal;
    }

}

function savingsTotal() {
    const balanceText = document.getElementById('total-balance').innerText;
    const balanceAmount = parseFloat(balanceText);

    const incomeAmount = inputField('income-input');
    const saveingsBalance = inputField('savings-balance');

    const savings = (incomeAmount * saveingsBalance) / 100;
    const remainingBalance = balanceAmount - savings;

    if (saveingsBalance < 0 || isNaN(saveingsBalance)) {
        alert('Please input valid number')
    } else if (balanceAmount < savings || balanceAmount <= 0) {
        alert('Dont have enough money in your account')
    }
    else {
        document.getElementById('savings-balance').innerText = savings;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
}
document.getElementById('button-1').addEventListener('click', function () {
    calculateTotal();
    //console.log(calculate());
})

document.getElementById('button-2').addEventListener('click', function () {
    savingsTotal();
})
