var cabecera, cuerpo, pie, nav;
var pnLogin, pError, pnModulos, pnTemas, pnUsuario;
var botonEnviar, botonUser;

// formato correo electrónico.
var testEmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/; 

function enviar(datos, op) {
    var url = "./php/aula.php";
    var solicitud = new XMLHttpRequest();
    solicitud.addEventListener('load', function () {
        recibir(solicitud, op);
    });
    solicitud.open("POST", url, true);
    solicitud.send(datos);
}

function enviarINSERT(datos) {
    var url = "./php/aula.php";
    var solicitud = new XMLHttpRequest();
    
    solicitud.open("POST", url, true);
    solicitud.send(datos);
    
}

function recibir(datos, op) {
    if (datos.status == 200) {
        var resultado = JSON.parse(datos.responseText);
        switch (op) {
            case "UR":
                recibeLogin(resultado);
                break;
            case "MU":
                recibeModulos(resultado);
                break;
            case "TM":
                recibeTemas(resultado);
                break;
            case "IMOD":
            break;
            case "INSUSUARIO":
            break;
        }
    }
}

function ocultaTodo() {
    pnModulos.style.display = "none";
    pnTemas.style.display = "none";
    pnLogin.style.display = "none";
    formMod.style.display = "none";
    formTema.style.display = "none";
    formUsuario.style.display = "none";
}

function verLogin() {
    ocultaTodo();
    
    pnLogin.style.display = "flex";
    aside1.style.visibility = "hidden";    
    aside2.style.visibility = "hidden";  
          
    let btEntrar = document.getElementById("entrar");
    let email = document.getElementById("correo");
    let psw = document.getElementById("psw");

    // usuario por defecto para pruebas ;-)
    email.value = "javi@javi.com";
    psw.value = "javijavi";

    btEntrar.addEventListener('click', function () {
        setTimeout("location.href='./index.html'", 100);
        email.style.backgroundColor = "";
        psw.style.backgroundColor = "";
        if (email.value == "") { email.style.backgroundColor = "tomato"; }
        if (psw.value == "") { psw.style.backgroundColor = "tomato"; }
        if (!testEmail.test(email.value)) { email.style.backgroundColor = "tomato"; }
        if (psw.value != "" && email.value != "" && testEmail.test(email.value)) {

            // petición del usuario y la contraseña
            var datos = new FormData();
            datos.append('opcion', 'UR');
            datos.append('email', email.value);
            datos.append('clave', psw.value);
            enviar(datos, "UR");
        }
    });
}

function nuevoUsuario() {
    pnLogin.style.display= "none";
    formUsuario.style.display= "flex";  
}

function recibeLogin(resultado) {
    if (resultado != null) {
        sessionStorage.setItem("nombre", resultado[0].nombre);
        sessionStorage.setItem("apellidos", resultado[0].apellidos);
        sessionStorage.setItem("email", resultado[0].email);
        sessionStorage.setItem("idusuario", resultado[0].idusuario);
        loginOK();
    } else {
        pError.style.visibility = "visible";
    }   
}

function loginOK() {
    ocultaTodo();
    aside1.style.visibility = "visible";
    aside1.style.visibility = "visible";
    pnUsuario.style.display = "inherit";
    pnUsuario.style.position = "absolute";

    let p = document.createElement("span");
    p.innerHTML = "Cerrar Sesión";
    p.addEventListener('click', function () {
        sessionStorage.removeItem("nombre");
        sessionStorage.removeItem("apellidos");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("idusuario");
        verLogin();
    })
    pnUsuario.innerHTML = sessionStorage.nombre + " " + sessionStorage.apellidos+"<br/>";
    pnUsuario.appendChild(p);

    // Petición de los grupos de produtos
    let datos = new FormData();
    datos.append('opcion', 'MU');
    datos.append("idusuario", sessionStorage.idusuario);
    enviar(datos, 'MU');
}

function recibeModulos(resultado) {

    pnModulos.style.display = "flex";

    pnModulos.innerHTML = "";
    var botonmas = document.createElement("div");
    botonmas.innerHTML = "<p>Añadir Nuevo módulo</p>";
    pnModulos.appendChild(botonmas);
    
    botonmas.addEventListener('click', function () {
    ocultaTodo();
    formMod.style.display = "flex";
    pnModulos.style.display = "flex";
   });

        let div = creaModulo(null)
        for (let i = 0; i < resultado.length; i++) {
            let r = resultado[i];
            var id_div = document.createAttribute("id");
            id_div.value = r.idmodulo;
            div.setAttributeNode(id_div);

            div = creaModulo(r);
            pnModulos.appendChild(div);
        }
       
}

function creaModulo(r) {
    let nombre;
    let idmodulo;
    let div = document.createElement("DIV");

    var div_class = document.createAttribute("class");
    div_class.value = "modulos";
    div.setAttributeNode(div_class);

    let datos = new FormData();

    if (r != null) {
        nombre = r.nombre; 
        idmodulo = r.idmodulo;
        datos.append('opcion', 'TM');
        datos.append('idmodulo', idmodulo);            
    } 
    div.addEventListener('click', function () {
        
        sessionStorage.setItem("nomProducto", nombre);
        sessionStorage.setItem("idmodulo", r.idmodulo);
        enviar(datos, 'TM');
    });


    let p = document.createElement("p");
    p.innerHTML = nombre;
    div.appendChild(p);
    return div;
}
function recibeTemas(resultado) {
    pnTemas.innerHTML = "";
    var botonmasTema = document.createElement("div");
    botonmasTema.innerHTML = "<p>Añadir Nuevo tema</p>";
    pnTemas.appendChild(botonmasTema);

     
    var botonmenos = document.createElement("div");
    botonmenos.innerHTML = "<p>Borrar módulo</p>";
    pnTemas.appendChild(botonmenos);

    botonmenos.addEventListener('click', function () {
        idmodulo = sessionStorage.idmodulo;
        var datos = new FormData();
        datos.append('opcion', 'DELMOD');
        datos.append('idmodulo', idmodulo);
      
        enviarINSERT(datos);
        setTimeout("location.href='./index.html'", 100);
       });
    
//funcion botonmasTema

       botonmasTema.addEventListener('click', function () {
        ocultaTodo();
        pnModulos.style.display = "flex";
        formTema.style.display = "flex";       
       });

    if (resultado != null) {    
        let div = creaTema(null);
        for (let i = 0; i < resultado.length; i++) {
            let r = resultado[i];
            div = creaTema(r);
            pnTemas.appendChild(div);
        }
        pnTemas.style.display = "flex";     
    } else {    
        pnTemas.style.display = "flex";
    }
}

function creaTema(r) {
    let div = document.createElement("DIV");
    var idtema;

    if (r != null) {
        
        titulo = r.titulo;
        descripcion = r.descripcion;

        //Variables del objeto JSON
        let texto = document.createElement("h1");
        let texto2 = document.createElement("p");
        let borraTema = document.createElement("p");
       
        texto.innerHTML = titulo;
        texto2.innerHTML = descripcion;
        borraTema.innerHTML = "Borrar Tema";

        borraTema.addEventListener('click', function () {

        idtema = r.idtema;
        alert(idtema);

        var datos = new FormData();
        datos.append('opcion', 'DELTEMA');
        datos.append('idtema', idtema);       
      
        enviarINSERT(datos);
        setTimeout("location.href='./index.html'", 100);
       });
    

        div = creaModulo(r);
        pnModulos.appendChild(div);      

        div.appendChild(texto);
        div.appendChild(texto2);
        div.appendChild(borraTema);
    
        return div;
    }
}

function anyadeModulo() {
    var nom_mod = document.getElementsByName("nom_mod")[0].value;
    idusuario = sessionStorage.idusuario;

    console.log('Nombre de módulo: '+nom_mod+ ' Nombre de usuario: ' + sessionStorage.idusuario);
    
        var datos = new FormData();
        datos.append('opcion', 'IMOD');
        datos.append('nom_mod', nom_mod);
        datos.append('idusuario', idusuario); 
      
        enviarINSERT(datos);
        //location.href="./index.html";
        setTimeout("location.href='./index.html'", 100);
}



function anyadeTema() {
    var nom_tema = document.getElementsByName("nom_tema")[0].value;
    var descripcion = document.getElementsByName("descripcion")[0].value;
    idmodulo = sessionStorage.idmodulo;    

        var datos = new FormData();

        datos.append('opcion', 'INSTEMA');
        datos.append('nom_tema', nom_tema);
        datos.append('descripcion', descripcion);
        datos.append('archivo', archivo);
        datos.append('idmodulo', idmodulo); 

        enviarINSERT(datos);
        setTimeout("location.href='./index.html'", 100);
}

function anyadeUsuario() {
    var nom_usuario = document.getElementsByName("nombre")[0].value;
    var ape_usuario = document.getElementsByName("apellidos")[0].value;
    var correo = document.getElementsByName("email")[0].value;
    var pass = document.getElementsByName("contrasenya")[0].value;

        var datos = new FormData();

        datos.append('opcion', 'INSUSUARIO');
        datos.append('nom_usuario', nom_usuario);
        datos.append('ape_usuario', ape_usuario);
        datos.append('correo', correo);
        datos.append('pass', pass);

        enviarINSERT(datos);
        setTimeout("location.href='./index.html'", 100);
}

window.addEventListener('load', function() {

    cabecera = document.getElementsByTagName("header")
    pie = document.getElementsByTagName("footer");
    cuerpo = document.getElementsByTagName("main");
    nav = document.getElementsByTagName("nav");

    pnNuevoUsuario = document.getElementById("pnNuevoUsuario");
    pnLogin = document.getElementById("pnLogin");
    pError = document.getElementById("pError");
    pnModulos = document.getElementById("pnModulos");
    pnTemas = document.getElementById("pnTemas");
    pnUsuario = document.getElementById("pnUsuario");

    botonEnviarMod = document.getElementById("botonEnviarMod");
    botonEnviarMod.addEventListener('click', anyadeModulo);

    botonEnviarTema = document.getElementById("botonEnviarTema");
    botonEnviarTema.addEventListener('click', anyadeTema);

    btnNuevoUusario = document.getElementById("btnNuevoUusario");
    btnNuevoUusario.addEventListener('click', nuevoUsuario);

    botonUser = document.getElementById("botonUser");
    botonUser.addEventListener('click', anyadeUsuario);

    

    if (sessionStorage.nombre != undefined) {
        loginOK();
        
    } else {
        verLogin();
    }

})



//Cuando el valor enviado al carro sea distinto de 0, mostrará el div del carro-----------   carrito.style.display = "flex";