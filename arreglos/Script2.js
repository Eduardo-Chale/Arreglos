
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
    let opc1=tamaño.value;
    let opc2=0;
    let opc3=0;
    let opc4=opc1;
    for(let n=0;n<(tamaño.value*tamaño.value);n++){

        if(n!=opc1){
            opc3=opc2;
            if(contenido[n].value==0){
                correcto=false;
            }
        }else{
            if(opc2>0){
                opc1++;
                opc2--;
            }else{
                opc2=opc3+1;
                if(opc2==1){
                    for(let h=0;h<tamaño.value;h++){
                        opc1++;
                    }


                }else{
                    opc4--;
                    opc1=opc1+opc4;


                }

            }

        }


    }
    if(correcto==true){
        alert("Valido");
    }else{
        alert("No valido");
    }

}