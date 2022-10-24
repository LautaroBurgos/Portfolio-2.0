import { pintarTecnologias } from "./eventosTecnologias.js";
import { tecnologias } from "./obtenerTecnologias.js";

document.body.onscroll=()=>{
    
    console.log(document.documentElement.clientWidth);
}
pintarTecnologias(tecnologias);