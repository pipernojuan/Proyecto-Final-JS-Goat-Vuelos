document.getElementById ('goat').addEventListener ('click',Vuelos);

function Vuelos(){
    fetch('goat.json')
    .then(function(res){
        return res.json ();
    })
    .then (function(data){
        let html = '';
        data.forEach(function(goat){
            html += `
            <h2>${goat.nombre}${goat.nombre2}</h2>
            `
        })
        document.getElementById ('resultado').innerHTML =html;
    })
}