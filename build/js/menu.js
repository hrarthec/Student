const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
     
    if(menu.style.display==="none"){
      menu.classList.toggle("mostrar");  
      
    }else{
      menu.classList.toggle("Nomostrar"); 
    }
});

const subMenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenubtn.length; i++){
    subMenubtn[i].addEventListener("click", function(){
      if(window.innerWidth<728){
        const subMenu = this.nextElementSibling;
        const height = subMenu.scrollHeight;

        if(subMenu.classList.contains("desplegar")){
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        }else{
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
        }
      }  
    });
}
