var nombres = []
function submit(){
    var ver_array = [];
    for(var j = 1; j<=4; j++){
        var nombre = document.getElementById("nombre"+j).value;
console.log(nombre);
nombres.push(nombre);

    }
    console.log(nombres)
    var long_nombres = nombres.length;
    console.log(long_nombres);

    for(var k = 0;k<long; k++){
        ver_array.push("<h4>Nombre-"+nombres[k]+"</h4>");
        console.log(ver_array)
    }
    document.getElementById("mostrar_nombres_con_comas").innerHTML = ver_array;

    var sin_comas = ver_array.join(" ");
    console.log(sin_comas);
    document.getElementById("mostrar_nombres_sin_comas").innerHTML = sin_comas;

    document.getElementById("boton_enviar").style.display = "none";
    document.getElementById("boton_ordenar").style.display = "inline-block";
}

   function sorting(){
    nombres.sort();
    var ver_ordenar = [];
    var long_nombres = nombres.length;
    console.log(long_nombres);

    for(var k = 0;k<long_nombres; k++){
        ver_ordenar.push("<h4>Nombre-"+nombres[k]+"</h4>");
        console.log(ver_ordenar);
    }
 var quitar_comas = ver_ordenar.join(" ");
   document.getElementById("mostrar_nombres_sin_comas").innerHTML= quitar_comas
   }