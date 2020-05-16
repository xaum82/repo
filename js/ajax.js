// función para procesar la respuesta de la petición
function procesaRespuesta() {
    if (peticion.readyState === 4 && peticion.status === 200) {
        datosjson = JSON.parse(peticion.responseText);
        mostrarArticulos(datosjson);
    }
}
// función que realiza la petición
function realizaPeticionUser() {
    peticion = new XMLHttpRequest();
    url = "./php/comerciosolidario.php?opcion=TG"; // url
    peticion.open('GET', url); // configuramos petición 
    peticion.addEventListener('readystatechange', procesaRespuesta);
    peticion.send();
    //Enviamos la petición al servidor
}