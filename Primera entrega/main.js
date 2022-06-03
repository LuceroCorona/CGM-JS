const catalogoAutos = [
    {articulo: '1', marca: "ford"},
    {articulo: '2', marca: "chevrolet"},
    {articulo: '3', marca: "renault"},
    {articulo: '4', marca: "volkswagen"},
]

const catalogoCamiones = [
    {articulo: '1', marca: "ford"},
    {articulo: '2', marca: "renault"},
    {articulo: '3', marca: "volkswagen"},
    {articulo: '4', marca: "iveco"},
]

let usuario
function bienvenida(){
    usuario = prompt("¡Buen día! Ingrese su nombre para comenzar");
    while (((usuario == "") || (usuario == null)) == true) {
        usuario = prompt("Por favor, ingrese un dato válido");
    }        
}

bienvenida();

let articulo = prompt("Mucho gusto, " + usuario + ". " + "Ingresa 'auto', 'camión' u 'otro' dependiendo de lo que estés buscando").toLowerCase();
console.log(articulo)
while (((articulo == "") || (articulo == null)) == true) {
    articulo = prompt("Por favor, ingrese un dato válido").toLowerCase();
}
if (articulo == "auto") {
    let marca = prompt("¿De qué marca es el auto que está buscando?");
    while(catalogoAutos.some((el) => el.marca == marca)==false ){
        marca = prompt("¡Lo siento! No trabajamos con "+marca+". "+" Te interesa otra marca? ").toLowerCase();
    }
    alert("Está buscando un " + marca);
    let modelo = prompt("¿Qué modelo le gustaría?");
    alert("Está buscando un " + marca + ", " + modelo);
    let anio = prompt("¿De qué año?");
    alert("Está buscando un " + marca + ", " + modelo + " "  + "del " + anio);
    alert( "Nos comunicaremos dentro de poco para planificar una visita y otros detalles");
} else {
    if (articulo == "camion") {
        let marca = prompt("¿De qué marca es el camión que está buscando?").toLowerCase();
        while(catalogoCamiones.some((el) => el.marca == marca)==false ){
            marca = prompt("¡Lo siento! No trabajamos con "+marca+". "+" Te interesa otra marca? ").toLowerCase();
        }
        alert("Está buscando un " + marca);
        let modelo = prompt("¿Qué modelo le gustaría?");
        alert("Está buscando un " + marca + ", " + modelo);
        let ejes = prompt("¿De cuántos ejes?");
        alert("Está buscando un " + marca + ", " + modelo + ", de " + ejes + " " + "ejes.");
        let anio = prompt("¿De qué año?");
        alert("Está buscando un " + marca + ", " + modelo + ", de " + ejes + " " + "ejes," + " "  + "del " + anio);
        alert( "Nos comunicaremos dentro de poco para planificar una visita y otros detalles");
    } else {
        let otro = prompt("¿Qué estás buscando?");
        alert("¡Perfecto, " + usuario + ". Nos comunicaremos dentro de poco para confirmarte si '" + otro + "' está disponible en el momento.");
    }
}

