let usuario = document.getElementById('nombre')

usuario.addEventListener("input", () => {
    localStorage.setItem('usuario', usuario.value);
    console.log(usuario.value);
    }
)

function bienvenida(){
    while (((usuario == "") || (usuario == null)) == true) {
        usuario = prompt("Por favor, ingrese un dato válido");
    }        
}

bienvenida();


// Se define articulo

const defArtAuto = () => {
    let articulo = 'auto';
    localStorage.setItem('articulo', articulo);
}
const defArtCamion = () => {
    let articulo = 'camion';
    localStorage.setItem('articulo', articulo);

}
const defArtOtro = () => {
    let articulo = 'otro';
    localStorage.setItem('articulo', articulo);

}

let botonAuto = document.getElementById('btnAuto');
let botonCamion = document.getElementById('btnCamion');
let botonOtro = document.getElementById('btnOtro');

botonAuto.addEventListener('click', defArtAuto);
botonCamion.addEventListener('click', defArtCamion);
botonOtro.addEventListener('click', defArtOtro);

let marca = document.getElementById('marca')
let anio = document.getElementById('anio')
let modelo = document.getElementById('modelo')
let ejes = document.getElementById('ejes')
let otro = document.getElementById('otro')



const infoConsulta = [
    {'marca': marca},
    {'modelo': modelo},
    {'anio': anio},
    {'ejes': ejes},
    {'otro': otro}
] 