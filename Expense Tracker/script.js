const expenses = "expenses";
const expense = document.getElementById('expenseName');
const amt = document.getElementById('amount');
const dt = document.getElementById('date');
const expenseList = document.getElementById('expenseList');
const template = document.getElementById('expenseTemplate');
const totalAmount = document.getElementById('totalAmount');
const storageData = getStorageData();

StorageDataDisplay();
function StorageDataDisplay(){
    storageData.forEach(element => {
        displayExpenses(element);
    });
    calculateExpense();
}

function displayExpenses(expenseData) {
    let clone = template.content.cloneNode(true);
    clone.querySelector('li').id = expenseData.id;
    clone.querySelector('.expense-name').textContent = expenseData.name;
    clone.querySelector('.expense-amount').textContent = expenseData.amount;
    clone.querySelector('.expense-date').textContent = expenseData.date;
    expenseList.appendChild(clone);
}

function addExpense() {
    const expenseData = {
        'id': new Date(),
        'name': expense.value,
        'amount': amt.value,
        'date': dt.value
    }
    storageData.push(expenseData);
    displayExpenses(expenseData);
    calculateExpense();
    setStorageData();
}

function removeExpense(event) {
    const target = event.target.parentElement
    expenseList.removeChild(target);
    let index = storageData.findIndex(expense=> {
        return expense.id === target.id });
    storageData.splice(index,1);
        setStorageData();
        calculateExpense();
}

function calculateExpense(){
    let sum = 0;
    storageData.forEach(expense => { sum+=Number(expense.amount)})
    totalAmount.textContent = sum;
}

function getStorageData() {
    let existingData = localStorage.getItem(expenses);
    return existingData ? JSON.parse(existingData) : [];
}

function setStorageData() {
    localStorage.setItem(expenses, JSON.stringify(storageData));
}