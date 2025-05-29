//Variables

let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log('Número secreto del juego:', numeroSecreto);
    console.log('Valor del usuario:', numeroDeUsuario);
    console.log('Comparación de números:', numeroDeUsuario === numeroSecreto);
    console.log('Número de intentos:', intentos);
    console.log('Números sorteados:', listaNumerosSorteados);
        
        if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor al asignado.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor al asignado.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
    

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Se han sorteado todos los números posibles.');
    } else {
        //Si el número generado estáincluido en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `¿Me das un número del 1 al ${numeroMaximo}?`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de inicio del juego
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


condicionesIniciales();