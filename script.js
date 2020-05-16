function conta(){
    var start = window.document.getElementById("numInicio");
    var end = window.document.getElementById("numFim");
    var cont = window.document.getElementById("passo");
    var mesage = window.document.getElementById("msg");
    var i;

    if(start.value.length == 0 || end.value.length == 0|| cont.value.length == 0){
        mesage.innerHTML = `Impossível Contar!`
        window.alert('[ERRO] Campo incorreto');
    }
    else{
        start = Number(start.value);
        end = Number(end.value);
        cont = Number(cont.value);
        
        if(cont <= 0){
            cont = 1;
            window.alert('[ERRO] Passo Inválido. Considerando Passo = 1.')
        }
            
        mesage.innerHTML = "Contando...</br>"

        if(start < end){
            for(i = start; i <= end; i += cont){
                mesage.innerHTML += ` ${i} \u{1F449} `
            }
        }
        else{
            for(i = start; i >= end; i -= cont){
                mesage.innerHTML += ` ${i} \u{1F449}`
            }
        }
        mesage.innerHTML += ` \u{1F3C1}`
    }   
}