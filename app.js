const $tablero = document.querySelector('#tablero');
const $cuadro = document.querySelectorAll('.cuadro')
const $finDelJuego = document.querySelector('.fin-del-juego');
let primerClick = null
let turnos = 0


function configurarTablero() {
    const colores = ['rojo', 'amarillo', 'verde', 'rosado', 'negro', 'azul']
    const coloresRepetidos = colores.concat(colores)
    configurarCuadro($cuadro, coloresRepetidos)
    manejarEventos($tablero)
}


function configurarCuadro($cuadro, coloresRepetidos) {
    const coloresRandom = coloresRepetidos.sort(function(){
        return 0.5 - Math.random()
    })

    coloresRandom.forEach(function(color, i){
        $cuadro[i].classList.add(color)
    })
}

function manejarEventos($tablero) {
    $tablero.onclick = function(e) {
        const elemento = e.target
        if (elemento.classList.contains('cuadro')) {
            manejarClick(elemento)            
        }

    }
    
}

function manejarClick(elemento) {
    mostrarElemento(elemento)
    if(primerClick === null){
        primerClick = elemento
    }else{
        if (primerClick === elemento) {
            return
        }
        turnos++
        if(elemento.className === primerClick.className){
            borrarCuadro(elemento)
            borrarCuadro(primerClick)
       
        }
        else{
            ocultarCuadro(elemento)
            ocultarCuadro(primerClick)
        }
        primerClick = null
        
    }
}
function mostrarElemento(elemento) {
    elemento.style.opacity = 1
}

function borrarCuadro(cuadro) {
    setTimeout(() => {
        cuadro.parentElement.classList.add('completo')
        cuadro.remove()    
        evaluarFinDelJuego()
    }, 500);
    
}

function ocultarCuadro(elemento){
    setTimeout(() => {
        elemento.style.opacity = 0        
    }, 500);
}

function evaluarFinDelJuego() {
    if (document.querySelectorAll('.cuadro').length === 0) {
            $tablero.style.display = 'none'
            let $strong = document.querySelector('strong')
            $strong.textContent = `Fin Del juego! lo hiciste en: ${turnos}`
            $finDelJuego.style.display = 'block'
    }
    
}
configurarTablero()
