
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


/*if (articulo='auto') {
    botonAuto.addEventListener('click', especifAutos);
} else {
    if (articulo = 'camion') {
        botonCamion.addEventListener('click', especifCamiones);
    } else {
        botonOtro.addEventListener('click', especifOtro);
    }
}
*/

if (articulo='auto') {
    botonAuto.addEventListener('click', especifAutos);
}

if (articulo = 'camion') {
    botonCamion.addEventListener('click', especifCamiones);
}

if (articulo = 'otro') {
    botonOtro.addEventListener('click', especifOtro);
}
