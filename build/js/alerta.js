function confirmeliminar(e){

  if (confirm ("Estas seguro que queres eliminar?")){

 return true; 
  }else{
    e.preventDefault();
  }
}