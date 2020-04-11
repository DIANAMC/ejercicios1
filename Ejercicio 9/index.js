var n1=prompt("Ingrese el 1er numero");
n1 = parseInt(n1);

var rest=0;

function div2(n1){

    rest = n1%2
    if(rest== 0){
        alert("el numero ingresado es divisible por 2")
    }else{
        alert("el numero ingresado NO es divisible por 2")
    }
}

div2(n1)