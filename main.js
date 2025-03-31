let bill = 0
let tipPercentage = 0 
let numberOfPeople = 0
let buttonSelected = null

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

function receivePercentage(value) {
    if(buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    let customTipInput = document.querySelector("#costum-tip")
    customTipInput.value = ""

    calculate()
}

function receiveCostumTipPercentage(){
    let customTipInput = document.querySelector("#custom-tip")
    tipPercentage = customTipInput.valueAsNumber / 100

    if(buttonSelected !== null) {
    buttonSelected.classList>remove("button-selected")
    buttonSelected = null
    }
    
    calculate()
}

    function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let tipAumontStrong = documen.querySelector(".amaunt strong")
        let tipAumontPerson = (bill * tipPercentage) / numberOfPeople
        tipAumontStrong.innertext = '$ ${tipAumontPerson.toFixed(2)}'

        let totaStrong = document.querySelector(".total strong")
        let total = (bill / numberOfPeople) + tipAumontPerson
        totalStrong.innertext = '$ ${total.toFixed(2)}'

    } else {
        console.log("Ainda não dá! Preencha tudo!")
    }
}