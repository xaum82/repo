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
    email.value = "";
    psw.value = "";

    btEntrar.addEventListener('click', function () {
        
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
    aside2.style.visibility = "visible";
    pnUsuario.style.display = "inherit";

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
        ocultaTodo();
        pnModulos.style.display = "flex";
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
    botonmasTema.innerHTML = "<img id='mastema' src='img/mas.png' width='40px'>"
    pnTemas.appendChild(botonmasTema);

     
    var botonmenos = document.createElement("div");
    botonmenos.innerHTML = "<p>Borrar todo el módulo</p>";
    pnTemas.appendChild(botonmenos);

    botonmenos.addEventListener('click', function () {
        var eliminarMod = confirm("¿Desea eliminar este módulo?");
        
        if (eliminarMod) {
            idmodulo = sessionStorage.idmodulo;
            var datos = new FormData();
            datos.append('opcion', 'DELMOD');
            datos.append('idmodulo', idmodulo);
        
            enviarINSERT(datos);
            setTimeout("location.href='./'", 100);
        }
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
            //Añade dentro del for el formulario para añadir archivos
        }
        pnTemas.style.display = "flex";     
    } else {    
        pnTemas.style.display = "flex";
    }
}

function creaTema(r) {
    let div = document.createElement("DIV");
    var idcadatema = document.createAttribute("class");
    idcadatema.value = "idcadatema";
    div.setAttributeNode(idcadatema);

    var idtema;

    if (r != null) {
        
        titulo = r.titulo;
        descripcion = r.descripcion;
        video = r.video;
        nom_enlace1 = r.nom_enlace1;
        nom_enlace2 = r.nom_enlace2;
        nom_enlace3 = r.nom_enlace3;
        nom_enlace4 = r.nom_enlace4;
        enlace1 = r.enlace1;
        enlace2 = r.enlace2;
        enlace3 = r.enlace3;
        enlace4 = r.enlace4;
        idtema = r.idtema;

        //Variables del objeto JSON
        let texto = document.createElement("h1");
        let texto2 = document.createElement("p");
        let vid = document.createElement("p");
     
        let link1 = document.createElement("a");
        let link2 = document.createElement("a");
        let link3 = document.createElement("a");
        let link4 = document.createElement("a");
        let borraTema = document.createElement("p");
       
        texto.innerHTML = titulo;
        texto2.innerHTML = descripcion;
        vid.innerHTML = video;
      
        link1.innerText = nom_enlace1;
        link2.innerText = nom_enlace2;
        link3.innerText = nom_enlace3;
        link4.innerText = nom_enlace4;
        borraTema.innerHTML = "Borra este tema";
        ///////
        ////Atributos href de los enlaces
        var enla1 = document.createAttribute("href");
        enla1.value = enlace1;
        link1.setAttributeNode(enla1);

        var enla2 = document.createAttribute("href");
        enla2.value = enlace2;
        link2.setAttributeNode(enla2);

        var enla3 = document.createAttribute("href");
        enla3.value = enlace3;
        link3.setAttributeNode(enla3);

        var enla4 = document.createAttribute("href");
        enla4.value = enlace4;
        link4.setAttributeNode(enla4);

        //Atributos target
        var enla1 = document.createAttribute("target");
        enla1.value = "_blank";
        link1.setAttributeNode(enla1);

        var enla2 = document.createAttribute("target");
        enla2.value = "_blank";
        link2.setAttributeNode(enla2);

        var enla3 = document.createAttribute("target");
        enla3.value = "_blank";
        link3.setAttributeNode(enla3);

        var enla4 = document.createAttribute("target");
        enla4.value = "_blank";
        link4.setAttributeNode(enla4);

        //////
        var btnElimTema = document.createAttribute("id");
        btnElimTema.value = "btnElimTema";
        borraTema.setAttributeNode(btnElimTema);


        borraTema.addEventListener('click', function () {
        var eliminarTema = confirm("¿Desea eliminar "+titulo+"?");
        
        if (eliminarTema) {
        var datos = new FormData();
        datos.append('opcion', 'DELTEMA');
        datos.append('idtema', idtema);       
      
        enviarINSERT(datos);
        setTimeout("location.href='./'", 100);
        }

       });
    
        pnModulos.appendChild(div);      

        div.appendChild(texto);
        div.appendChild(texto2);
        div.appendChild(vid);
        div.appendChild(link1);
        div.appendChild(link2);
        div.appendChild(link3);
        div.appendChild(link4);
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
        setTimeout("location.href='./'", 100);
}



function anyadeTema() {
    var nom_tema = document.getElementsByName("nom_tema")[0].value;
    var descripcion = document.getElementsByName("descripcion")[0].value;
    var video = document.getElementsByName("video")[0].value;

    var nom_enlace1 = document.getElementsByName("nom_enlace1")[0].value;
    var nom_enlace2 = document.getElementsByName("nom_enlace2")[0].value;
    var nom_enlace3 = document.getElementsByName("nom_enlace3")[0].value;
    var nom_enlace4 = document.getElementsByName("nom_enlace4")[0].value;
    
    var enlace1 = document.getElementsByName("enlace1")[0].value;
    var enlace2 = document.getElementsByName("enlace2")[0].value;
    var enlace3 = document.getElementsByName("enlace3")[0].value;
    var enlace4 = document.getElementsByName("enlace4")[0].value;    
    
    
    idmodulo = sessionStorage.idmodulo;    

        var datos = new FormData();

        datos.append('opcion', 'INSTEMA');
        datos.append('nom_tema', nom_tema);
        datos.append('descripcion', descripcion);
        datos.append('video', video);

        datos.append('nom_enlace1', nom_enlace1);
        datos.append('nom_enlace2', nom_enlace2);
        datos.append('nom_enlace3', nom_enlace3);
        datos.append('nom_enlace4', nom_enlace4);

        datos.append('enlace1', enlace1);
        datos.append('enlace2', enlace2);
        datos.append('enlace3', enlace3);
        datos.append('enlace4', enlace4);
        datos.append('idmodulo', idmodulo); 

        enviarINSERT(datos);
        setTimeout("location.href='./'", 100);
}

function anyadeUsuario() {
    var nom_usuario = document.getElementsByName("nombre")[0].value;
    var ape_usuario = document.getElementsByName("apellidos")[0].value;
    var correo = document.getElementsByName("email")[0].value;
    var pass = document.getElementsByName("contrasenya")[0].value;

    if (correo !="" && pass!="") {

        var datos = new FormData();

        datos.append('opcion', 'INSUSUARIO');
        datos.append('nom_usuario', nom_usuario);
        datos.append('ape_usuario', ape_usuario);
        datos.append('correo', correo);
        datos.append('pass', pass);

        enviarINSERT(datos);
        alert("Usuario creado");
        setTimeout("location.href='./'", 100);   
    } else {
        alert("El campo correo y el campo contraseña son obligatorios");
    }     
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