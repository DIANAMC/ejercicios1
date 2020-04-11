var n1=prompt("Ingrese el 1er numero");
var n2=prompt("Ingrese el 2do numero");
var n3=prompt("Ingrese el 3er numero");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

function mayorQue(n1,n2,n3){
    var n4=0;
    var n5=0;
    if(n1>n2){
        n4 = n1
    }else{
        n4 =n2
    }
    if(n2>n3){
        n5=n2;
    }else{
        n5=n3;
    }
    if(n4>n5){
        alert("El numero mayor es "+n4)
    }else{
        alert("El numero mayor es "+n5)
    }
}

mayorQue(n1,n2,n3)