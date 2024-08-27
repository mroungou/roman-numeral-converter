const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

const romanNumerals = [
    {'numeral': 'M', 'value': 1000},
    {'numeral': 'CM', 'value': 900},
    {'numeral': 'D', 'value': 500},
    {'numeral': 'CD', 'value': 400},
    {'numeral': 'C', 'value': 100},
    {'numeral': 'XC', 'value': 90},
    {'numeral': 'L', 'value': 50},
    {'numeral': 'XL', 'value': 40},
    {'numeral': 'X', 'value': 10},
    {'numeral': 'IX', 'value': 9},
    {'numeral': 'V', 'value': 5},
    {'numeral': 'IV', 'value': 4},
    {'numeral': 'I', 'value': 1},
]

const decimalToRoman = (input) => {
    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (input >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            input -= romanNumerals[i].value;
        }
    }

    return outputDiv.innerText = result;
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (numberInput.value === '') {
        outputDiv.textContent = 'Please enter a valid number';
    } else if (inputInt < 0) {
        outputDiv.textContent = 'Please enter a number greater than or equal to 1'
    } else if (inputInt >= 4000) {
        outputDiv.textContent = 'Please enter a number less than or equal to 3999'
    } else {
        outputDiv.textContent = decimalToRoman(inputInt);
    }

}


convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
})