<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon"/>
    <script src="js/ajax.js"></script>
    <script src="js/aula.js"></script>
    <link rel="stylesheet" href="css/estilo.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <title>Aula Virtual</title>
</head>

<body>
    <header>
        <img src="./img/aula.png">
        
    </header>
    <div id="central">
        <aside id="aside1">
            <nav id="pnModulos"></nav>
            <iframe id ="icalendar" src="https://calendar.google.com/calendar/embed?src=iescamp.es_iv2cikfg2apeiofkgqo6m4d9bg%40group.calendar.google.com&ctz=Europe%2FMadrid"></iframe>
        </aside>
        <main>
            <div id="pnLogin">
                <label for="correo">Correo</label>
                <input type="email" name="correo" id="correo">
                <label for="psw">Contraseña</label>
                <input type="password" name="psw" id="psw">
                <div id="pError">Usuario no registrado&nbsp&nbsp&nbsp&nbsp&nbsp</div>
                <button id="entrar">ENTRAR</button>
                    <p>¿Todavía no eres usuario?</p>
                    <button id="btnNuevoUusario">Regístrate</button>
            </div>
            <div id="pnTemas">
            </div>

            <!--Formulario para añadir usuarios-->
            <form action="" id ="formUsuario" method="POST">
                <p>Nombre <br/><input type="text" name="nombre" ></p>
                <p>Apellidos <br/><input type="text" name="apellidos"></p>
                <p>Correo Electrónico <br/><input type="email" name="email" ></p>
                <p>Contraseña <br/><input type="password" name="contrasenya" ></p>
                <input id="botonUser" type="button" value="Añadir usuario"><br/>
                <a href="./">Volver</a>
            </form>
            <!--Formulario para añadir módulos-->
            <form action="" id ="formMod" method="POST">        
                <p>Nombre del módulo <input type="text" name="nom_mod"></p>
                <input id="botonEnviarMod" type="button" value="Añadir módulo" >
            </form>
            
            <!--Formulario para añadir temas-->
            <form action="" id ="formTema" method="POST" enctype="multipart/form-data" >
                <p>Nombre del tema <br/><input type="text" name="nom_tema" ></p><br/>
                <p>Descipción<br/>
                    <textarea rows="10px" name="descripcion" cols="25px" ></textarea>
                </p><br/>
                <p>Vídeos <br/><input type="text" name="video"></p><br/>
                <p>Enlaces <br/>
                   <span>Nombre: <input type="text" name="nom_enlace1"></span><br/>
                   <span>Url: <input type="text" name="enlace1"></span><br/><br/>
                   <span>Nombre: <input type="text" name="nom_enlace2"></span><br/>
                   <span>Url: <input type="text" name="enlace2"></span><br/><br/>
                   <span>Nombre: <input type="text" name="nom_enlace3"></span><br/>
                   <span>Url: <input type="text" name="enlace3"></span><br/><br/>
                   <span>Nombre: <input type="text" name="nom_enlace4"></span><br/>
                   <span>Url: <input type="text" name="enlace4"></span><br/><br/>
                <!--<p><input type="text" name="enlace3"></p><br/>
                <p><input type="text" name="enlace4"></p><br/>-->
                
                <input id="botonEnviarTema" type="button" value="Añadir tema">
            </form>
        </main>
        <aside id="aside2">
                <p>Aulas virtuales:</p>
                <a href="http://fp.edu.gva.es/av" target="_blank">Aula Moodle</a>
                <a href="http://mestreacasa.gva.es/web/" target="_blank">Mestreacasa</a>
                <a href="http://www.saps.gva.es/va/" target="_blank">Portal Saps GVA</a>
                <br/>
            <p>Cursos online:</p>
                <a href="https://moodlecloud.com/" target="_blank">MoodleCloud</a>
                <a href="http://exelearning.net/" target="_blank">ExeLearning</a>
                <a href="https://www.udemy.com/" target="_blank">Udemy</a>
                <a href="https://www.aulaclick.es/" target="_blank">Aulaclick</a>
                <a href="https://platzi.com/" target="_blank">Platzi</a>
        </aside>
    </div>
    <footer>
        <h3>Jaime Valero Sánchez</h3>
        <div id="pnUsuario"></div>
        <h4>DAW Proyecto fin de ciclo 2019</h4>
    </footer>
</body>

</html>