function agregarEventoHero(){
    let nombre=document.getElementById("hero__nombre");
    setTimeout(function(){
        nombre.style.opacity="1";
    },700);
     let titulo=document.getElementById("hero__titulo");
    setTimeout(function(){
        titulo.style.opacity="1";
    },1500);
    let botones=document.getElementsByClassName("boton");
    console.log(botones);
    setTimeout(function(){
        for(let boton of botones){
            boton.style.opacity="1";
        }
    },2000);
}
agregarEventoHero();