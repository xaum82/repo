// funci�n para procesar la respuesta de la petici�n
function procesaRespuesta() {
    if (peticion.readyState === 4 && peticion.status === 200) {
        datosjson = JSON.parse(peticion.responseText);
        mostrarArticulos(datosjson);
    }
}
// funci�n que realiza la petici�n
function realizaPeticionUser() {
    peticion = new XMLHttpRequest();
    url = "./php/comerciosolidario.php?opcion=TG"; // url
    peticion.open('GET', url); // configuramos petici�n 
    peticion.addEventListener('readystatechange', procesaRespuesta);
    peticion.send();
    //Enviamos la petici�n al servidor
}