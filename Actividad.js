window.onload = () => {
    document.getElementById("submit").addEventListener('click', tiempo);
    
};
function tiempo (tem){
    tem.preventDefault();
    var name = document.getElementById("nombre0").value;
    var city = document.getElementById("ciudad0").value;
    var country = document.getElementById("pais0").value
    if( nombre.length > 0 && pais.length > 0 && ciudad.length > 0 ) {
    document.getElementById('ciudad1').innerHTML = ciudad0;
    document.getElementById('pais1').innerHTML = pais0;
    document.getElementById('nombre1').innerHTML = nombre0;
    consultaAPI(ciudad, pais); 
    }
    if( nombre.length == 0 || pais.length == 0 || ciudad.length == 0 ) {
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar todos los campos',
          icon: 'error',
          confirmButtonText: 'X'
        })
    }
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

    function verTiempo(data) {
        var grados = Math.round(parseFloat(data.main.temp) - 273.15);
        var maximo = Math.round(parseFloat(data.main.temp_max) - 273.15);
        var minimo = Math.round(parseFloat(data.main.temp_min) - 273.15);
        document.getElementById('tiempo').innerHTML = '<p> El tiempo que hace es '+grados+'. Maximo '+maximo+' Minimo '+minimo+'</p>';
    }
