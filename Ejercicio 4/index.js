var valores = [true,5,"adios", 2,false,"hola"];

for(i=0; i<=valores.length; i++){
    if (valores[i].type == Number) {
        var Num = new Set();
        var suma= Num[0]+Num[1];
        var resta= Num[0]-Num[1];
        var resta2= Num[1]-Num[0];
        var mult= Num[0]* Num[1];
        var div= Num[0]/Num[1];
        var div2= Num[0]/Num[1];
        document.write(suma + "suma",
        resta + "resta",
        resta2 + "resta",
        mult + "multiplicación",
        div + "division",
        div2 + "division"
        )


    }
    if(valores[i].type== String){
        var txt = new Set();
        txt = valores[i];

        txt =valores[i]; 
        if (txt[0]> txt[1]){
            document.write(txt[0])
        }else{
            document.write(txt[1])
        }


    }
    if(valores[i].type == Boolean){
        var bole = new Set();
        bole = valores[i];
        var rest1 = bole[0] || bole[1];
        document.write(rest1);

    }

}