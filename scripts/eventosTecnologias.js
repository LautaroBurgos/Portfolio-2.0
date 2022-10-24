/*
 */
function pintarTecnologias(tecnologias){
    let divTecnologias=document.getElementById("tecnologias");
    for(let tech of tecnologias){
        const{nombre,urlImg,texto,urlRepo}=tech;

        let divTech=document.createElement("div");
        divTech.setAttribute("id",nombre);
        divTech.setAttribute("class","divTecnologia");

        let imgTech=document.createElement("img");
        imgTech.setAttribute("src",urlImg);
        imgTech.setAttribute("class","img__tech");
        imgTech.setAttribute("id",`img__${nombre}`);
        crearDivAuxiliar(divTech,nombre,urlImg,texto,urlRepo);
        agregarEventoImagenes(imgTech,nombre);

        divTech.appendChild(imgTech);
        divTecnologias.appendChild(divTech);
        agregarEventoCerrarAux(nombre);
    }
    agregarEventoMostrarDivTech();
}
function crearDivAuxiliar(divTech,nombre,urlImg,texto,urlRepo){

    let nuevoDiv=document.createElement("div");
    nuevoDiv.setAttribute("class","divAuxiliar");
    nuevoDiv.setAttribute("id",`divAux${nombre}`);
    nuevoDiv.innerHTML=`
    <img src=img/cerrar.png class="boton__cerrar" id="${nombre}_boton">
    <div class="div__img__texto__auxiliar">
        <img id="img__auxiliar__${nombre}" class="img__auxiliar" src="${urlImg}">
        <p class="texto__auxiliar">${texto}</p>
    </div>
    <div class="aux__botones">
    <a class="aux__link" href="${urlRepo}" target="BLANK"><button class="boton__aux">Visita mi repositorio con proyectos utilizando ${nombre}</button></a>
    </div>
    `;
    divTech.appendChild(nuevoDiv);
}
function agregarEventoImagenes(imgTech,nombre){
    imgTech.onclick=()=>{
        cerrarDivsAbiertos();
        let divAux=document.getElementById(`divAux${nombre}`);
        divAux.style.left="0px";
        document.body.onclick=()=>{
           console.log("click");
        }

    }
}
function agregarEventoCerrarAux(nombre){
    let boton=document.getElementById(`${nombre}_boton`);
    boton.onclick=()=>{
        let divAux=document.getElementById(`divAux${nombre}`);
        divAux.style.left="-10000px";
    }
}
function cerrarDivsAbiertos(){
    let divsAux=document.getElementsByClassName("divAuxiliar");
    for(let div of divsAux){
        div.style.left="-10000px";
    }
}
function agregarEventoMostrarDivTech(){
    let botonMostrar=document.getElementById("boton-mostrar");
    botonMostrar.onclick=()=>{
        let divBoton=document.getElementById("div-boton");
        setTimeout(function(){
            divBoton.style.opacity="0";
        },600);
        divBoton.style.right="1000000px";

        let misTecnologias=document.getElementById("mis-tecnologias");
        let titulo=document.getElementById("mis-tecnologias-titulo");
        setTimeout(function(){
            titulo.style.opacity="1";
        },500);
        setTimeout(function(){
            misTecnologias.style.height="fit-content";
            misTecnologias.style.top="unset";
        },600);
        setTimeout(function(){
            let divsInvisibles=document.getElementsByClassName("divTecnologia");
            let i=1;
            for(let div of divsInvisibles ){
                setTimeout(function(){
                    div.style.opacity="1";
                },800*i);
                i++;
            }
        },600);
    }
}
export {pintarTecnologias};

