document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img: 'https://drive.google.com/uc?export=download&id=10wfoQ0QVVUqWHjdGgypWp69JkwmED9m9'},
        {img: 'https://drive.google.com/uc?export=download&id=11WsZEklRFUVex4GIlMibe4XETg-HRSKy'},
        {img: 'https://drive.google.com/uc?export=download&id=13Zs1-F0iBSJAyfi7L3M9KycbbVNs8ZXD'},
        {img: 'https://drive.google.com/uc?export=download&id=15hs_b50keHbP45noEPFcBtJD1T8GMvFM'},
        {img: 'https://drive.google.com/uc?export=download&id=16CKFhZdzRcDV5tKc0lwxxAtabrw5P6O4'},
        {img: 'https://drive.google.com/uc?export=download&id=1Cr2u0eI9PaJJQjY_CZm4lpGzXdIdKKw_'},
        {img: 'https://drive.google.com/uc?export=download&id=1EkylLFENGRuHaQwmbyEMIEnLrqAlmhr6'},
        {img: 'https://drive.google.com/uc?export=download&id=1HckVT90XTkUE_h1IlU64TMHzNmeChSjQ'},
        {img: 'https://drive.google.com/uc?export=download&id=1L4T1TD4sfbkdupZEY6SO0JHUQFkugACd'},
        {img: 'https://drive.google.com/uc?export=download&id=1SPdMK5eZ-il3GQv4IBlGRRzNw2M3hlbQ'},
        {img: 'https://drive.google.com/uc?export=download&id=1UHsJgeXMPn4EyTtPIQECfZCvDiQhlagN'},
        {img: 'https://drive.google.com/uc?export=download&id=1baulwsZwkn7cRk5Bxf9H1AZRNapIyvVr'},
        {img: 'https://drive.google.com/uc?export=download&id=1d-CfQjEvQVKDQvYdbpaHwtD_Get-6smu'},
        {img: 'https://drive.google.com/uc?export=download&id=1dEHcKA1rcGk_R8OYnkdlAzPVAMlX7IIM'},
        {img: 'https://drive.google.com/uc?export=download&id=1hqtPS3v8CIB823Otb_HVhXr3-0Jidao3'},
        {img: 'https://drive.google.com/uc?export=download&id=1i7Fm8ZT5M1-sUILGyT5ZpiAylW3tiy1a'},
        {img: 'https://drive.google.com/uc?export=download&id=1je-hRBIYeQax3kMEItttHxEg76DPOtEM'},
        {img: 'https://drive.google.com/uc?export=download&id=1vwJ_bT9rcVNiCLuKx9jqTnBdqwK2wSMp'}                                                                    
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




  