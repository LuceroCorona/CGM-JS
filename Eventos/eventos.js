let botonAuto = document.getElementById('btnAuto');
let botonCamion = document.getElementById('btnCamion');
let botonOtro = document.getElementById('btnOtro');

const especifAutos = () => {
    let especifAutos = document.createElement ('section');
    especifAutos.innerHTML = '<section id="sectionAuto"> <h3> Especificaciones autos</h3> <input id="marca" type="text" placeholder="Marca"> <input id="modelo" type="text" placeholder="Modelo"> <input id="anio" type="number" placeholder="Año"> </section>';
    document.getElementById('consulta').append(especifAutos);
}

const especifCamiones = () => {
    let especifCamiones = document.createElement ('section');
    especifCamiones.innerHTML = '<section id="sectionCamion"> <h3> Especificaciones camiones</h3> <input id="marca" type="text" placeholder="Marca"> <input id="modelo" type="text" placeholder="Modelo"> <input id="anio" type="number" placeholder="Año"> <input id="ejes" type="number" placeholder="Ejes"> </section>'
    document.getElementById('consulta').append(especifCamiones);
}

const especifOtro = () => {
    let especifOtro = document.createElement ('section');
    especifOtro.innerHTML = '<section id="sectionOtro"> <h3> ¿Buscas otra cosa? </h3> <input id="otro" type="text"> <input id="detalles" type="text" placeholder="Más detalles (opcional)"> </section>'
    document.getElementById('consulta').append(especifOtro);
}

botonAuto.addEventListener('click', especifAutos);
botonCamion.addEventListener('click', especifCamiones);
botonOtro.addEventListener('click', especifOtro);
