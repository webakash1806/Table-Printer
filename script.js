function cls() {
    document.getElementById("table").value = ""
    document.getElementById("finalResult").innerHTML = ""
}



function res() {
    document.getElementById("finalResult").innerHTML = ""

    let tableNumber = document.getElementById("table").value

    let result = ""

    for (let i = 1; i <= 10; i++) {
        result = `${tableNumber} x ${i} = ${tableNumber * i}`
        document.getElementById("finalResult").innerHTML += `<br> ${result}`
    }

    document.getElementById("table").value = ""

}

