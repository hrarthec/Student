<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IDF El Renuevo - Inicio</title>
    <link rel="stylesheet" href="build/css/es-slider.css">
    <link rel="stylesheet" href="build/css/estilo.css">
    <link rel="stylesheet" href="build/css/cajas.css">
    <script src="build/js/slider.js" defer></script>
    <script src="build/js/menu.js" defer></script>
</head>
<body>    
    <header class="encabezado">
        <div class="arriba">
        <?php require 'header.php'; ?> 
        </div>              
    </header>


    <div class="container-slider">
        <div class="slider" id="slider">
            <div class="slider__section">
                <section class="imagen-slider1">
                </section>                         
            </div>
            <div class="slider__section">
                <section class="imagen-slider2">      
                </section>                                   
            </div>
            <div class="slider__section">
                <section class="imagen-slider3"> 
                </section>      
            </div>
        </div>
    </div>

<main class="contenido">
    <p class="pTitulo">
        ULTIMAS NOTICIAS
    </p>     
    <div class="caja-contenido extra">
        <div class="caja">
            <p class="cTitulo">
                HOMENAJE AL MAESTRO 2023
            </p>
            <img src="https://drive.google.com/uc?export=download&id=12K-wLH_3c397wLjNtpqL_JCdalp7gjvy" alt="">
            <div class="leerMas">
                <div class="conLeer1">
                    Para más información, presione sobre
                </div>
                <div class="conLeer2">
                    <a href="1.php">Leer Mas +</a>
                </div>               
            </div>
        </div>
        <div class="caja">
        <p class="cTitulo">
                DESFILE 2023
            </p>
            <img src="https://drive.google.com/uc?export=download&id=1DXh1PnWmXzFVS8arODNvu437nMXS2Ehn" alt="">
            <div class="leerMas">
                <div class="conLeer1">
                    Para más información, presione sobre
                </div>
                <div class="conLeer2">
                    <a href="#">Leer Mas +</a>
                </div>               
            </div>
        </div>
        <div class="caja">
        <p class="cTitulo">
                BIENVENIDA PARA CPI
            </p>
            <img src="https://drive.google.com/uc?export=download&id=1wqH7prErTarpRampm7xspmqk2V2kWTQE" alt="">
            <div class="leerMas">
                <div class="conLeer1">
                    Para más información, presione sobre
                </div>
                <div class="conLeer2">
                    <a href="#">Leer Mas +</a>
                </div>               
            </div>
        </div>
    </div>    
</main>
    <footer>
        <?php require 'footer.php'; ?> 
    </footer> 
</body>
    <script src="build/js/bundle.min.js"></script>
</html>