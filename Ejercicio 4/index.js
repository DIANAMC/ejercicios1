var valores = [true,5,"adios", 2,false, "hola" ];

for(i=0; i<=valores.length; i++){
    // Lo primero que hacemos es hacer un console log de los datos
    // Para asi saber que datos tenemos

    console.log("Estos son los datos ", valores[i]);

    // Ya sabemos que tenemos los tipos de datos tenemos
    // Ahora vamos a mirar el valor que tipo de dato es cada posicion del arreglo
    // Revisa los logs para que leas el codigo y lo entiendas
    console.log("El valor de este campo es ", valores[i] ," Este dato es de tipo",  typeof(valores[i]))

    // El las proximas progagandas continuo

    
    if (typeof(valores[i]) === "number") {
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
    if(typeof(valores[i])=== "string"){
        var txt = new Set();
        txt = valores[i];

        txt =valores[i]; 
        if (txt[0]> txt[1]){
            document.write(txt[0])
        }else{
            document.write(txt[1])
        }


    }
    if(typeof(valores[i]) === "boolean"){
        var bole = new Set();
        bole = valores[i];
        var rest1 = bole[0] || bole[1];
        document.write(rest1);

    }

}