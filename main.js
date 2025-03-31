let bill = 0
let tipPercentage = 0 
let numberOfPeople = 0

//receber o valor da conta
let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

//receber o número de pessoas
let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentageValue(value) {
    let buttonSelected = document.querySelector()
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("é possível calcular")
    } else {
        console.log("Ainda não dá! Preencha tudo!")
    }
}