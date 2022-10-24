const obtenerTecnologias = async () => {
    const response = await fetch('scripts/tech.json');
    let techs = await response.json();
    return techs;
};
let tecnologias=(await obtenerTecnologias());

export {tecnologias};