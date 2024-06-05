const inputVal = document.querySelector('input')
const calcDays = document.querySelector('[data-days]')
const resetBtn = document.querySelector('button')

function calculate() {
    calcDays.innerText = parseInt(inputVal.value * 365)
}

inputVal.addEventListener('input', calculate)

function reset() {
    inputVal.value = ''
    calcDays.innerText = ''
}

resetBtn.addEventListener('click', reset)