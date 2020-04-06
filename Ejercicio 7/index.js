var n1 = prompt("ingrese un numero")
var n2 = prompt("ingrese otro numero")

n1 = parseInt(n1);
n2 = parseInt(n2);
console.log(n1,n2)

function mayorQue(n1,n2){
    console.log(n1)
    console.log(n2)
    if(n1 == n2){
        alert("es el mismo numero")
    }
    if(n1 > n2){
        alert( n1 +" es mayor que "+n2)

    }
    if(n2>n1){
        alert(n2 + "es mayor que" + n1)
    }
    else{
        alert("ingrese datos validos")
    }
}

mayorQue(n1,n2)