function creaMat(){
    let contenido=[];
    let diag=0;
    let llenado="";
    for(var i=0;i<tamaño.value;i++){
        for(var j=0;j<tamaño.value;j++){
            if(diag==j){
                contenido.push(1);
            }else{
                contenido.push(0);
            }
        }
        diag++;
    }

    let cantidad=0;

    for(let k=0;k<tamaño.value;k++){
        for(let l=0;l<tamaño.value;l++){
            llenado=llenado+contenido[cantidad];

            if(l==tamaño.value-1){
                llenado=llenado+"<br>";

            }else{
                llenado=llenado+" ";
            }
            cantidad++;
        }


    }
    document.getElementById("mat").innerHTML=llenado;

    return contenido;
}
