var frase =[];
frase = prompt("Ingresa tu frase");

var caract = frase.length;
var i = 0;
var cont= 0;
console.log(caract)
console.log(i)
function conteoA(frase){
    for(i=0; i<=caract; i++){
        if(frase[i]== "a"){
            cont++
        }

    }
    alert("la letra a se encuentra " + cont + " veces")
}

conteoA(frase)