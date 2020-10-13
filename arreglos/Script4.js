function creaTriang(){
    let contenido=[];
    let mostrar=[1];
    let llenado="";

    for(let k=nivel.value;k>0;k--){
        for(let i=k;i>0;i--){
            llenado=llenado+"&nbsp";
        }
        if(k==nivel.value){
            llenado=llenado+mostrar[0]+"<br>";
        }else{
            for(let l=0;l<mostrar.length;l++){
                llenado=llenado+mostrar[l];

                if(l==mostrar.length-1){
                    llenado=llenado+"<br>";

                }else {
                    llenado = llenado + " ";
                }
            }
        }

        contenido=mostrar.slice();

        mostrar=[];
        mostrar.push(1);
        if(contenido.length>0){
            for(let j=0;j<contenido.length-1;j++){
                let entrada=contenido[j]+contenido[j+1];
                mostrar.push(entrada);
            }
        }

        mostrar.push(1);



    }
    document.getElementById("pascal").innerHTML=llenado;

    return contenido;
}
