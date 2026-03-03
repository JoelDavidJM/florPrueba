let number = 9
let number2 = 0
let operacion = '/'

if (operacion === '+') {
    let result = number + number2
    console.log(result)
} else if (operacion === '-') {
    let result = number - number2
    console.log(result)
} else if (operacion === '*') {
    let result = number * number2
    console.log(result)
} else if (operacion === '/') {
    if (number2 === 0) {
        console.log('No se puede dividir entre cero')
    } else {
        let result = number / number2
        console.log(result)
    }
}
