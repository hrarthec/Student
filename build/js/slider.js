const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Mderecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 4.5s ease";
    setTimeout(function(){
        slider.style.transition = "none";        
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 4000);  
}

setInterval(function(){
    Mderecha();
},8000);

/*
function Mderecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 3.5s ease";
    setTimeout(function(){
        //slider.style.transition = "none";
        slider.style.transition = "all 3.5s ease";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 5000);  
}
function Mizquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 3.5s ease";
    setTimeout(function(){
        //slider.style.transition = "none";
        slider.style.transition = "all 3.5s ease";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 5000);  
}
btnRight.addEventListener('click',function(){
    Mderecha();
});
btnLeft.addEventListener('click',function(){
    Mizquierda();
});
setInterval(function(){
    Mderecha();
},5000);
*/