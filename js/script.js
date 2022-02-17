// Handle button event

document.getElementById('button-1').addEventListener('click', function () {
    calculateTotal();

})

document.getElementById('button-2').addEventListener('click', function () {
    savingsTotal();
})
// declare input field function

function inputField(inputFieldId) {
    const inputArea = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputArea);
    return inputValue;
}

// declare budget calculation function

function calculateTotal() {

    const incomeAmount = inputField('income-input');
    const foodAmount = inputField('food-input');
    const rentAmount = inputField('rent-input');
    const clothesAmount = inputField('clothes-input');
    // calculate expense amount
    const expenseAmount = foodAmount + rentAmount + clothesAmount;
    const balanceTotal = incomeAmount - expenseAmount;
    // error handle

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
// savings function
function savingsTotal() {

    const balanceText = document.getElementById('total-balance').innerText;
    const balanceAmount = parseFloat(balanceText);

    const savingsText = document.getElementById('save-input').value;
    const savingsAmount = parseFloat(savingsText);

    const incomeText = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(incomeText);

    // find percentage value 
    const savings = (incomeAmount * savingsAmount) / 100;
    const remainingBalance = balanceAmount - savings;

    if (savingsAmount < 0 || isNaN(savingsAmount)) {

        document.getElementById('savings-balance').innerText = 00;
        document.getElementById('remaining-balance').innerText = 00;
        alert('Please input valid number')
    }
    else if (balanceAmount < savings || balanceAmount <= 0) {
        alert('Dont have enough money in your account')
    }

    else {
        document.getElementById('savings-balance').innerText = savings;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
}

