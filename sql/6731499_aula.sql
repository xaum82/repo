-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: PMYSQL109.dns-servicio.com:3306
-- Tiempo de generación: 09-06-2019 a las 20:38:27
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `6731499_aula`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

CREATE TABLE `modulos` (
  `idmodulo` int(2) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `idusuario` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `modulos`
--

INSERT INTO `modulos` (`idmodulo`, `nombre`, `idusuario`) VALUES
(32, 'Matemáticas', 13),
(37, 'Programación', 20),
(38, 'Lenguaje de Marcas', 20),
(39, 'Sistemas y redes', 20),
(40, 'FOL', 20),
(41, 'Bases de datos', 20),
(42, 'Inglés', 20),
(43, 'Entornos de desarrollo', 20),
(45, 'Lenguaje', 22),
(48, 'Desarrollo Web Entorno Servidor', 24),
(49, 'Desarrollo Web Entorno Cliente', 24),
(50, 'Despliegue de Aplicaciones Web', 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `idtema` int(2) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(5000) NOT NULL,
  `idmodulo` int(2) NOT NULL,
  `video` varchar(2000) NOT NULL,
  `nom_enlace1` varchar(100) NOT NULL,
  `nom_enlace2` varchar(100) NOT NULL,
  `nom_enlace3` varchar(100) NOT NULL,
  `nom_enlace4` varchar(100) NOT NULL,
  `enlace1` varchar(500) NOT NULL,
  `enlace2` varchar(500) NOT NULL,
  `enlace3` varchar(500) NOT NULL,
  `enlace4` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`idtema`, `titulo`, `descripcion`, `idmodulo`, `video`, `nom_enlace1`, `nom_enlace2`, `nom_enlace3`, `nom_enlace4`, `enlace1`, `enlace2`, `enlace3`, `enlace4`) VALUES
(8, 'U1 - Introducción a la programamción', '<iframe class=\"scribd_iframe_embed\" title=\"Tema 1 - Introducción a la Programacion\" src=\"https://www.scribd.com/embeds/110631067/content?start_page=1&view_mode=scroll&show_recommendations=true&access_key=key-1i79vyyyciyegvxo6gw3\" data-auto-height=\"true\" data-aspect-ratio=\"null\" scrolling=\"no\" width=\"600px\" height=\"650\" frameborder=\"0\"></iframe>', 37, '', '', '', '', '', '', '', '', ''),
(9, 'U1 - Curso Básico de Html5', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/cqMfPS8jPys\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 38, '', '', '', '', '', '', '', '', ''),
(10, 'Tema 3', '<p  style=\"   margin: 12px auto 6px auto;   font-family: Helvetica,Arial,Sans-serif;   font-style: normal;   font-variant: normal;   font-weight: normal;   font-size: 14px;   line-height: normal;   font-size-adjust: none;   font-stretch: normal;   -x-system-font: none;   display: block;\"   ><a title=\"View A5 on Scribd\" href=\"https://www.scribd.com/document/411216393/A5#from_embed\"  style=\"text-decoration: underline;\">A5</a> by <a title=\"View \'s profile on Scribd\" href=\"undefined#from_embed\"  style=\"text-decoration: underline;\"></a> on Scribd</p><iframe class=\"scribd_iframe_embed\" title=\"A5\" src=\"https://www.scribd.com/embeds/411216393/content?start_page=1&view_mode=scroll&show_recommendations=false&access_key=key-4fkER6WY67fh4A1QyI6x\" data-auto-height=\"true\" data-aspect-ratio=\"null\" scrolling=\"no\" width=\"500px\" height=\"600\" frameborder=\"0\"></iframe>', 41, '', '', '', '', '', '', '', '', ''),
(12, 'Tema 2', '', 37, '', '', '', '', '', '', '', '', ''),
(26, 'Tema 1', 'Entorno de trabajo, conceptos J2EE y cliente Web', 48, '<iframe src=\"https://www.youtube.com/embed/7NsOu22MdPs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Cliente.pdf', 'Conceptos J2EE.pdf', 'Ejercicios cliente.pdf', 'Preparación entorno DWS.pdf', 'https://drive.google.com/open?id=1_2gSXgNBMKshIyjNfxHaUIJP_XuL6ghF', 'https://drive.google.com/open?id=1DBLWrbN9YkU3aFMNZuLvgG_Ozt8S1pEt', 'https://drive.google.com/open?id=1s-hQzEy4tHOEBMf4Do4Y3xbFh2Jd2cpr', 'https://drive.google.com/open?id=1Vpoc1dMTV7azVOkMCArcz0MNPvv8appe'),
(27, 'Tema 2', 'Java Server Pages', 48, '<iframe  src=\"https://www.youtube.com/embed/40KM8IdneLg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Conexion Netbeans Oracle.pdf', 'Ejercicios JSP.pdf', 'JDBC.pdf', 'JSP.pdf', 'https://drive.google.com/open?id=1CfwBUNYl2qekCAASedeEsqFe8CX3Ke72', 'https://drive.google.com/open?id=1R46QLPCPlLYirzE41X2VwTANIxFI4pCH', 'https://drive.google.com/open?id=1R_9f4aLtKI-gbBip_ZVZgC7mXgIEwVKP', 'https://drive.google.com/open?id=1j9rUOSqZaEtxQSANnAwyJkmKHhiV0IUx'),
(29, 'Tema 1', 'Selección de arquitecturas y herramientas de programación', 49, '<iframe  src=\"https://www.youtube.com/embed/i68UlgqPuTU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Apuntes Tema 1.pdf', 'Como controlar errores en javascript', 'EjerciciosT1.pdf', '', 'https://drive.google.com/open?id=1fR22upG7fd4p9SNxuq5beBgxFp7c2fzy', 'https://drive.google.com/open?id=1J392eV4GMjubaWhU0d9hU55Haii0kKJ5', 'https://drive.google.com/open?id=11LlouST6E8CjykhCFD4JeZIlssgY6W7k', ''),
(31, 'Tema 2', 'El lenguaje Javascript', 49, '<iframe class=\"scribd_iframe_embed\" title=\"Curso Manual Tutorial Javascript Con Ejemplos\" src=\"https://www.scribd.com/embeds/32660/content?start_page=1&view_mode=scroll&show_recommendations=true&access_key=duf2zmvczfafu\" data-auto-height=\"false\" data-aspect-ratio=\"null\" scrolling=\"no\" width=\"600\" height=\"800\" frameborder=\"0\"></iframe>', 'Tema 2.pdf', 'Ejercicios T2.pdf', '', '', 'https://drive.google.com/open?id=1Wg-Pf-w4apMYTqg73gWNMhf1bhrGElEc', 'https://drive.google.com/open?id=1LGFViX2vvHi_h52I5DXlbaAjlag0Itz1', '', ''),
(32, 'Tema 3', 'Utilización de objetos predefinidos en JS', 49, '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZFpackqz7ks\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Apuntes T3.pdf', 'Ejercicios T3.pdf', '', '', 'https://drive.google.com/open?id=1Km05D9DDK7-fBZOgXHLjHMWrvC_mGLdY', 'https://drive.google.com/open?id=1VTrhUYImgcjLoo-U9_UkzI7--9WkWEX-', '', ''),
(33, 'Tema 1', 'Despliegue de aplicaciones web. Introducción.', 50, '<iframe src=\"https://www.youtube.com/embed/49zdlyLSwhQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'ApuntesT1.pdf', 'EjerciciosT1.pdf', '', '', 'https://drive.google.com/open?id=1eL4Qwrjre7LOHa9qUNsNsaEsfM-CnSyu', 'https://drive.google.com/open?id=1qTtwfVMDnvpCvR7MNsH8PsjyJyoJ14-R', '', ''),
(34, 'Tema 2', 'Configurar el entorno de trabajo. Virtualización', 50, '<iframe src=\"https://www.youtube.com/embed/sh_4rfHD1D0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Trabajar con paquetes.pdf', 'Niveles de ejecución', 'Configuración de red', 'Ejercicios T2.pdf', 'https://drive.google.com/open?id=1pN8udaM7k5PejWXfgpJIevvI2UGhhHdI', 'https://drive.google.com/open?id=1gyvRH-zJVcSyR2lS-BsJKaOVAKkWYI6z', 'https://drive.google.com/open?id=1T_DDGem_2AWb1u8MSyE0oT1tWmv64D2N', 'https://drive.google.com/open?id=1QW2ANNQO94AbbjvQyrA9hUsts7CabwG1'),
(35, 'Tema 3', 'Servicio de resolución de nombres. DNS', 50, '<iframe src=\"https://www.youtube.com/embed/T1C6btPOLF8\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><br><iframe src=\"https://www.youtube.com/embed/r2qCTvMK7Os\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Funcionamiento DNS.pdf', 'Servidores DNS Linux.pdf', 'Configurar DNS bind.pdf', 'EjerciciosT3.pdf', 'https://drive.google.com/open?id=1SqcaXIPWkHrc-h3UIm11pnUmF0yBhQEI', 'https://drive.google.com/open?id=1Y-kPa4ZrWib54DW8gApHDNul44KvtuH3', 'https://drive.google.com/open?id=1aRNbPlPLjucckB76r6VzchNPWFSBJEeC', 'https://drive.google.com/open?id=1vrF-5FOz2ILbQRs3DflcakP_nBa9C6Kd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(2) NOT NULL,
  `nombre` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `contrasenya` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombre`, `apellidos`, `email`, `contrasenya`) VALUES
(13, 'Javier', 'Avila', 'javi@javi.com', 'javijavi'),
(20, 'Jaime', 'Valero', 'demo@demo.com', 'demo'),
(21, 'Nuevo', '', 'nuevo@nuevo.com', 'nuevo'),
(22, 'nano', '', 'nano@nano.com', 'nano'),
(23, 'DAW2', '', 'daw2@daw2.com', 'daw1'),
(24, 'DAW2', '', 'demo2@demo2.com', 'demo2'),
(33, '', '', '', ''),
(34, '', '', '', ''),
(35, '', '', '', ''),
(36, '', '', 'user2@user2.com', 'user2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`idmodulo`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`idtema`),
  ADD KEY `idmodulo` (`idmodulo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `modulos`
--
ALTER TABLE `modulos`
  MODIFY `idmodulo` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `idtema` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `modulos`
--
ALTER TABLE `modulos`
  ADD CONSTRAINT `modulos_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `temas`
--
ALTER TABLE `temas`
  ADD CONSTRAINT `temas_ibfk_1` FOREIGN KEY (`idmodulo`) REFERENCES `modulos` (`idmodulo`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
