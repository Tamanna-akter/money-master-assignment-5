
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeText = document.getElementById('income-input');
    const incomeAmount = (incomeText.value);
    // incomeText.value = "";

    const foodText = document.getElementById('food-input');
    const foodAmount = foodText.value;
    foodText.value = "";
    const rentText = document.getElementById('rent-input');
    const rentAmount = rentText.value;
    rentText.value = "";
    const clothesText = document.getElementById('clothes-input');
    const clothesAmount = clothesText.value;
    clothesText.value = "";
    const expensesTotal = document.getElementById('expense-total');
    const currentTotalBalance = document.getElementById('total-balance');
    const total = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
    expensesTotal.innerText = total;
    currentTotalBalance.innerText = parseFloat(incomeAmount) - expensesTotal.innerText;
});

document.getElementById('save-button').addEventListener('click', function () {
    const savingsInputText = document.getElementById('save-input');
    const incomeText = document.getElementById('income-input');
    const incomeAmount = incomeText.value;
    const savingsPercentValue = savingsInputText.value;
    const savings = (incomeAmount * parseInt(savingsPercentValue) / 100);
    const savingsBalance = document.getElementById('savings-balance');
    savingsBalance.innerText = savings;
    const currentTotalBalance = document.getElementById('total-balance').innerText;
    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalance = remainingBalanceText.innerText;

    const remaining = currentTotalBalance - savingsBalance.innerText;
    remainingBalanceText.innerText = remaining;




})