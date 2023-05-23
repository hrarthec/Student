document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img: 'https://drive.google.com/uc?export=download&id=1-iIwsTYvIQqtgAkpuThCNeB4xDaJtCe0'},
        {img: 'https://drive.google.com/uc?export=download&id=11Mm3cjN-iFvrfnjzpTB2OAn6TFqpjXiD'},
        {img: 'https://drive.google.com/uc?export=download&id=15QZ7uR7c-_hmsva112rU_-mqgCPAAUm3'},
        {img: 'https://drive.google.com/uc?export=download&id=17G8Gij97V6eoOdbimuUOl2_G49IyMSwK'},
        {img: 'https://drive.google.com/uc?export=download&id=17gh_jTHKRKC90URUBRxAONI4yR78RNab'},
        {img: 'https://drive.google.com/uc?export=download&id=18L3AHmkdL5kiZQmdop0yoaGXTVsMh0CV'},
        {img: 'https://drive.google.com/uc?export=download&id=1BbJeVfdWIPUMGKdHg7cu7U7oMwyyJtzl'},
        {img: 'https://drive.google.com/uc?export=download&id=1DCf__6rmSGutYc0Za9SikP3_uoZp_WB6'},
        {img: 'https://drive.google.com/uc?export=download&id=1G62Gi6wddOEwwqRiWpfs-YkqQE30j04y'},
        {img: 'https://drive.google.com/uc?export=download&id=1JqdF7nNVuJk1LDcA2C21PpJZ40YTFe0y'},
        {img: 'https://drive.google.com/uc?export=download&id=1Q3XlCoUkuc3NtocbDjBGbLXUCXn2ng7i'},
        {img: 'https://drive.google.com/uc?export=download&id=1QCdmhCeOE7Z3-Cy-hkiSBmJZiL3U173k'},
        {img: 'https://drive.google.com/uc?export=download&id=1R34EEwMbvACJ5CIzUHOii8DkTauemPre'},
        {img: 'https://drive.google.com/uc?export=download&id=1WDUX-VPRIe5lZt_ZRchkqgKYhuyJMa73'},
        {img: 'https://drive.google.com/uc?export=download&id=1WKEPm6BdJRxIo8DPsKy37TD5553cAmMq'},
        {img: 'https://drive.google.com/uc?export=download&id=1WguGZD4oL4Ls0DL5b1K1_RWKtRh19LsD'},
        {img: 'https://drive.google.com/uc?export=download&id=1X7lt1gYXbDNbhsjnRCxHVx6mvT4mMDHl'},
        {img: 'https://drive.google.com/uc?export=download&id=1ZuToeHUVHSIBIhUgJh0CgbL6gtb2Y83c'},
        {img: 'https://drive.google.com/uc?export=download&id=1rgM98BzQ6hWr_fcuwkQ-7blUkOa29SyY'}                                                        
    ];

    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img 
                contador = imagenes.length - 1  
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1 ) {  
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    //Parte para mover con el teclado
    document.addEventListener("keydown", function(event) {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img')
        if (event.key === "ArrowLeft") {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img 
                contador = imagenes.length - 1  
            }
        } else if (event.key === "ArrowRight") {
            if (contador < imagenes.length - 1 ) {  
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
      })
    //fin Parte para mover con el teclado

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar) - 1
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = 'hidden';
    }
})




  