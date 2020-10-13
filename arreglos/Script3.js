
function creaMat(){
    contenido=[];

    let ident=0;
    for(let i=0;i<tamaño.value;i++){
        for(let j=0;j<tamaño.value;j++){
            let inputs= document.createElement("input");
            inputs.setAttribute("id", "inputs"+ident);
            inputs.setAttribute("value", "0")
            document.body.appendChild(inputs);
            contenido.push(inputs);

            ident++;
        }
        var brs=document.createElement("br");
        document.body.appendChild(brs);
    }
}
function validar(){
    let correcto=true;
    let opc1=0;
    let opc2=tamaño.value;
    let opc3=0;
    let opc4=0;
    for(let n=0;n<(tamaño.value*tamaño.value);n++){

        if(n==opc1){


            if(contenido[n].value==0){
                correcto=false;
            }

            if(opc3==0){
                for(let i=0;i<opc2;i++) {
                    opc1++;
                }
                opc2--;
                opc4++;
                opc3=opc4;
            }else{
                opc1++;
                opc3--;
            }

        }

    }



    if(correcto==true){
        alert("Valido");
    }else{
        alert("No valido");
    }

}