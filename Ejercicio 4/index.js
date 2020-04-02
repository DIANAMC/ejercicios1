var valores = [true,5,"adios", 2,false, "hola" ];
var Num = []
var Textos = []
var Boleanos = []

for(i=0; i<=valores.length; i++){
    // Lo primero que hacemos es hacer un console log de los datos
    // Para asi saber que datos tenemos

    // console.log("Estos son los datos ", valores[i]);

    // Ya sabemos que tenemos los tipos de datos tenemos
    // Ahora vamos a mirar el valor que tipo de dato es cada posicion del arreglo
    // Revisa los logs para que leas el codigo y lo entiendas

    // console.log("El valor de este campo es ", valores[i] ," Este dato es de tipo",  typeof(valores[i]))

    
    
    // lo siguiente que vamos hacer es verificar cuando un dato es entero.
    if (typeof(valores[i]) === "number") {
        
        // console.log("Es un entero", valores[i])

        // console.log("Antes del add", Num)

        Num.push(valores[i])

        // console.log("Despues del add",Num)

    }
    
    if(typeof(valores[i]) === "string"){
        
        // console.log("Esto es un string ", valores[i])

        Textos.push(valores[i])


    }
    if(typeof(valores[i]) === "boolean"){
        
        // console.log("Es un boleano", valores[i])

        Boleanos.push(valores[i])
     
    }

}


if(Textos[0].length > Textos[1].length){
    document.getElementById("SolucionPunto1").innerHTML = Textos[0]

}else{
    document.getElementById("SolucionPunto1").innerHTML = Textos[1]
}

Boleanos[1] && Boleanos[0] ?  document.getElementById("ResultadoTRUE").innerHTML = "TRUE" :    document.getElementById("ResultadoTRUE").innerHTML = "FALSE"
Boleanos[1] || Boleanos[0] ?  document.getElementById("ResultadoFALSE").innerHTML = "TRUE"  :  document.getElementById("ResultadoFALSE").innerHTML = "FALSE" 


document.getElementById("suma").innerHTML = Num[0] + Num[1]
document.getElementById("miltiplicacion").innerHTML = Num[0] * Num[1]
document.getElementById("resta").innerHTML = Num[0] - Num[1]
document.getElementById("division").innerHTML = Num[0] / Num[1]



