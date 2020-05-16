<?php
  header('Content-Type: application/json');
  header('Cache-Control: no-cache, must-revalidate');
  header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 
  //include ('file.php');
  // -------  en el archivo carrocompra.sql está la creación del usuario la bd y las tablas en MySQL.
  
  $servidor = "PMYSQL109.dns-servicio.com";   // Configuración BD
  $basedatos = "6731499_aula";
  $usuario = "xaum";
  $password = "Pa55w.rd@#";
  
  
  /*
  $servidor = "localhost";   // Configuración BD
  $basedatos = "6731499_aula";
  $usuario = "root";
  $password = ""; */
  
  // -------   Crear la conexión al servidor y ejecutar la consulta.
  $conexion= new mysqli($servidor, $usuario, $password) or die(mysqli_error());
  mysqli_query($conexion,"SET NAMES 'utf8'");
  mysqli_select_db($conexion,$basedatos) or die(mysqli_error());
 

 // -------- párametro opción para determinar la select a realizar -------
  if (isset($_GET['opcion']))         //si se recibe el parámetro opcion mediante GET
      $opc=$_GET['opcion'];
  else
     if (isset($_POST['opcion']))     //si se recibe el parámetro opcion mediante POST
        $opc=$_POST['opcion'];

        // -- pámetros email y clave para realizar la consulta de usuarios registrados       
  if (isset($_GET['email'])) $email=$_GET['email']; 
  else
   if (isset($_POST['email'])) $email=$_POST['email']; 
   
  if (isset($_GET['clave'])) $clave=$_GET['clave']; 
  else
     if (isset($_POST['clave'])) $clave=$_POST['clave'];


// ------- pámetro idusuario para realizar la consulta de módulos por usuario
   if (isset($_GET['idusuario']))     //si se recibe el parámetro idusuario mediante GET
      $idusuario=$_GET['idusuario'];
  else
     if (isset($_POST['idusuario']))  //si se recibe el parámetro idusuario mediante POST
        $idusuario=$_POST['idusuario'];

// ------- pámetro idmodulo para realizar la consulta de temas por cada modulo
if (isset($_GET['idmodulo']))     //si se recibe el parámetro idusuario mediante GET
$idmodulo=$_GET['idmodulo'];
else
if (isset($_POST['idmodulo']))  //si se recibe el parámetro idusuario mediante POST
  $idmodulo=$_POST['idmodulo'];

 // ------- pámetro idmodulo para realizar la consulta de temas por cada modulo
if (isset($_GET['nom_mod']))     //si se recibe el parámetro idusuario mediante GET
$nom_mod=$_GET['nom_mod'];
else
if (isset($_POST['nom_mod']))  //si se recibe el parámetro idusuario mediante POST
  $nom_mod=$_POST['nom_mod'];

  // ------- pámetro nom_tema 
if (isset($_GET['nom_tema']))     //si se recibe el parámetro descripcion mediante GET
$nom_tema=$_GET['nom_tema'];
else
if (isset($_POST['nom_tema']))  //si se recibe el parámetro descripcion mediante POST
  $nom_tema=$_POST['nom_tema'];

//---------------parámetro idtema
if (isset($_GET['idtema']))     //si se recibe el parámetro descripcion mediante GET
$idtema=$_GET['idtema'];
else
if (isset($_POST['idtema']))  //si se recibe el parámetro descripcion mediante POST
  $idtema=$_POST['idtema'];

// ------- pámetro descripcion 
if (isset($_GET['descripcion']))     //si se recibe el parámetro descripcion mediante GET
$descripcion=$_GET['descripcion'];
else
if (isset($_POST['descripcion']))  //si se recibe el parámetro descripcion mediante POST
  $descripcion=$_POST['descripcion'];

  //---------------parámetro video
if (isset($_GET['video']))     //si se recibe el parámetro video mediante GET
$video=$_GET['video'];
else
if (isset($_POST['video']))  //si se recibe el parámetro video mediante POST
  $video=$_POST['video'];

  //---------------parámetro nom_enlace1
  if (isset($_GET['nom_enlace1']))     //si se recibe el parámetro nom_enlace1 mediante GET
  $nom_enlace1=$_GET['nom_enlace1'];
  else
  if (isset($_POST['nom_enlace1']))  //si se recibe el parámetro nom_enlace1 mediante POST
    $nom_enlace1=$_POST['nom_enlace1'];

      //---------------parámetro nom_enlace2
  if (isset($_GET['nom_enlace2']))     //si se recibe el parámetro nom_enlace1 mediante GET
  $nom_enlace2=$_GET['nom_enlace2'];
  else
  if (isset($_POST['nom_enlace2']))  //si se recibe el parámetro nom_enlace1 mediante POST
    $nom_enlace2=$_POST['nom_enlace2'];
  
      //---------------parámetro nom_enlace1
  if (isset($_GET['nom_enlace3']))     //si se recibe el parámetro nom_enlace1 mediante GET
  $nom_enlace3=$_GET['nom_enlace3'];
  else
  if (isset($_POST['nom_enlace1']))  //si se recibe el parámetro nom_enlace1 mediante POST
    $nom_enlace3=$_POST['nom_enlace3'];
  
      //---------------parámetro nom_enlace1
  if (isset($_GET['nom_enlace4']))     //si se recibe el parámetro nom_enlace1 mediante GET
  $nom_enlace4=$_GET['nom_enlace4'];
  else
  if (isset($_POST['nom_enlace4']))  //si se recibe el parámetro nom_enlace1 mediante POST
    $nom_enlace4=$_POST['nom_enlace4'];
  

  //---------------parámetro enlace1
if (isset($_GET['enlace1']))     //si se recibe el parámetro enlace1 mediante GET
$enlace1=$_GET['enlace1'];
else
if (isset($_POST['enlace1']))  //si se recibe el parámetro enlace1 mediante POST
  $enlace1=$_POST['enlace1'];

    //---------------parámetro enlace2
if (isset($_GET['enlace2']))     //si se recibe el parámetro enlace1 mediante GET
$enlace2=$_GET['enlace2'];
else
if (isset($_POST['enlace2']))  //si se recibe el parámetro enlace1 mediante POST
  $enlace2=$_POST['enlace2'];

    //---------------parámetro enlace3
if (isset($_GET['enlace3']))     //si se recibe el parámetro video mediante GET
$enlace3=$_GET['enlace3'];
else
if (isset($_POST['enlace3']))  //si se recibe el parámetro enlace3 mediante POST
  $enlace3=$_POST['enlace3'];

    //---------------parámetro enlace4
if (isset($_GET['enlace4']))     //si se recibe el parámetro enlace4 mediante GET
$enlace4=$_GET['enlace4'];
else
if (isset($_POST['enlace4']))  //si se recibe el parámetro enlace4 mediante POST
  $enlace4=$_POST['enlace4'];

//----------parámetro nom_usuario
if (isset($_GET['nom_usuario']))     //si se recibe el parámetro descripcion mediante GET
$nom_usuario=$_GET['nom_usuario'];
else
if (isset($_POST['nom_usuario']))  //si se recibe el parámetro descripcion mediante POST
  $nom_usuario=$_POST['nom_usuario'];

//-----------parámetro ape_usuario
if (isset($_GET['ape_usuario']))     //si se recibe el parámetro descripcion mediante GET
$ape_usuario=$_GET['ape_usuario'];
else
if (isset($_POST['ape_usuario']))  //si se recibe el parámetro descripcion mediante POST
  $ape_usuario=$_POST['ape_usuario'];

//-----------parámetro correo
if (isset($_GET['correo']))     //si se recibe el parámetro descripcion mediante GET
$correo=$_GET['correo'];
else
if (isset($_POST['correo']))  //si se recibe el parámetro descripcion mediante POST
  $correo=$_POST['correo'];

//---------------parámetro pass
if (isset($_GET['pass']))     //si se recibe el parámetro descripcion mediante GET
$pass=$_GET['pass'];
else
if (isset($_POST['pass']))  //si se recibe el parámetro descripcion mediante POST
  $pass=$_POST['pass'];


// ------- selección de la consulta a realizar --------
switch ($opc) {
    case "MU":
         //TC Muéstrame todos los módulos de cada usuario
         $sql="select * from modulos where idusuario = '".$idusuario."'";
         //$sql="select * from modulos where idusuario = '6'";

         break;
    case "TM":
         //PG Muéstrame los temas de cada módulo
       $sql="select * from temas where idmodulo = '".$idmodulo."'";    
        break;
   
    case "UR":
         $sql="select * from usuarios where email = '".$email."' and contrasenya = '".$clave."'";
         break;

    case "IMOD":
         $sql="INSERT INTO `modulos` (`nombre`, `idusuario`) VALUES ('".$nom_mod."', ".$idusuario.")";
         break;

    case "INSTEMA":
         $sql="INSERT INTO temas (titulo, descripcion, video, nom_enlace1, nom_enlace2, nom_enlace3, nom_enlace4, enlace1, enlace2, enlace3, enlace4, idmodulo) VALUES ('".$nom_tema."', '".$descripcion."', '".$video."', '".$nom_enlace1."', '".$nom_enlace2."', '".$nom_enlace3."', '".$nom_enlace4."', '".$enlace1."', '".$enlace2."', '".$enlace3."', '".$enlace4."', '".$idmodulo."')";
         break;

    case "INSUSUARIO":
         $sql="INSERT INTO usuarios (nombre, apellidos, email, contrasenya) VALUES ('".$nom_usuario."', '".$ape_usuario."', '".$correo."', '".$pass."')";
         break;
    case "DELMOD":
         $sql="DELETE FROM modulos WHERE idmodulo = '".$idmodulo."'";
         break;
    case "DELTEMA":
         $sql="DELETE FROM temas WHERE idtema = '".$idtema."'";
}

  $datos=null;
  $resultados=mysqli_query($conexion,$sql) or die(mysqli_error());
  if ($resultados != null){ 
     while ( $fila = mysqli_fetch_array($resultados))
     {
         $datos[]=$fila;                    // Almacenar en un array cada filas del recordset.
        
      }
     echo json_encode($datos);              // función de PHP que convierte a formato JSON el array.
  } else {
   header("location: www.google.com");
  }
  
  mysqli_close($conexion);
?>

