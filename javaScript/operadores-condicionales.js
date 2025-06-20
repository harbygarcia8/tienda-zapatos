// if - else - else if - switch

let numero = '0'


// else if

if (numero > 0) {
    console.log(`El numero ${numero} es positivo`)
} else if (numero === 0) {
    console.log(`El numero ${numero} es neutro`)
} else {
    console.log(`El numero ${numero} es negativo`)
}

// switch

let dia = 4

switch (dia) {
    case 1:
        console.log('Lunes')
        break;
    case 2: 
        console.log('Martes')
        break;
    default:
        console.log('No es un dia de la semana')
        break;
}

// operador ternario

    let edad = 18;

    // if (numero > 0) {
    //     console.log(`El numero ${numero} es positivo`)
    // } else {
    //     console.log(`El numero es 0 o es negativo`)
    // }

    let mensaje = edad >= 18 ? 'Eres mayor de edad' : "Eres menor de edad"
    console.log(mensaje);
