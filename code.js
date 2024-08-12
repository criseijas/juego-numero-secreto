const btnNuevoJuego = document.querySelector('.btnNuevoJuego');

let intentos = 0;
let numeroMaximo = 10;
let numeroSecreto = 0;
let listaNumerosSorteados = [];

function asignarTexto(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    let nroUsuario = document.querySelector('input');
    nroUsuario.value = "";
}

function verificarIntento() {
    let nroUsuario = document.querySelector('input').value;
    console.log(nroUsuario)
    if(nroUsuario == numeroSecreto){
        asignarTexto('p', `Acertaste en ${intentos} ${intentos == 1?'intento':'intentos'} <i class="em em-wink" aria-role="presentation" aria-label="WINKING FACE"></i>`)
        btnNuevoJuego.removeAttribute('disabled');
        document.querySelector('.btnIntentar').setAttribute("disabled", true)
        
    }
    else{
        if(nroUsuario > numeroSecreto){
            asignarTexto('p', `el número es menor <i class="em em-thinking_face" aria-role="presentation" aria-label="THINKING FACE"></i>`)
            
        }
        else{
            asignarTexto('p', `el número es mayor <i class="em em-worried" aria-role="presentation" aria-label="WORRIED FACE"></i>`)
        }
        intentos++;
        limpiarCaja()
    }

}

function generarNroSecreto(){
   let nroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(nroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p', 'Ya se sortearon todos los números posibles')
    }else{
        if(listaNumerosSorteados.includes(nroGenerado)){
            return generarNroSecreto(); //recursividad
       }else{
            listaNumerosSorteados.push(nroGenerado);
            return nroGenerado;
       }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    btnNuevoJuego.setAttribute('disabled', true);
    document.querySelector('.btnIntentar').removeAttribute('disabled');
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del Número Secreto!!')
    asignarTexto('p', `Indique un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNroSecreto();
    console.log(numeroSecreto)
    intentos = 1;
}

condicionesIniciales();
