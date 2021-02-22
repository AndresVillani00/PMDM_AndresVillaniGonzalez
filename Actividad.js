window.onload = () =>{
    consultaAPI("Caracas", "VEN");
    consultaAPI("Madrid", "ES");
    consultaAPI("Roma", "ITA");
    consultaAPI("Berlin", "GER");
    consultaAPI("Miami", "USA");
}

function consultaAPI(ciudad, pais) {
    const appId = "8bcd21ef6f7645a2f59034a486b8fd6f";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&Lang-es`;
}

fetch(url)
    .then((respuesta) =>{
        return respuesta.json();
    })
    .then((datos) =>{
        console.log(datos);
    })
    .catch((error) =>{
        console.error(error);
    })


