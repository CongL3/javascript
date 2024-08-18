// Initialize the counter value
let count = 0;

// Select the counter display element
const counterDisplay = document.getElementById('counter');
const milkBroughtDisplay = document.getElementById('milkBrought');

const moneyInput = document.getElementById('moneyInput');
const milkInput = document.getElementById('milkInput');

function buyMilkButtonPressed() {
    var totalMoney = moneyInput.value.trim();
    var costOfMilk = milkInput.value.trim();
    
    var change = calculateChange(totalMoney, costOfMilk);
    counterDisplay.textContent = change;

    var numberOfMilkBrought = calculateHowManyMilksIBrought(totalMoney, costOfMilk);
    milkBroughtDisplay.textContent = numberOfMilkBrought
}

function calculateChange(totalMoney, costOfMilk) {
    return totalMoney % costOfMilk;
}

function calculateHowManyMilksIBrought(totalMoney, costOfMilk) {
    return Math.floor(totalMoney / costOfMilk);
}

