
function enviar() {

    var nome = document.getElementById('nome');
    var mail = document.getElementById('mail');
    var cel = document.getElementById('cel');
    var ra = document.getElementById('ra');
    var log = document.getElementById('log');


    verificanome(nome);
    verificamail(mail);
    verificacel(cel);
    verificara(ra);
    verificalog (log);

}




function verificanome(nome) {
                
    if (nome.value==="") {

        alert("Nome não é valido.");
        console.log("invalido.");
        return false;

    }else{

        console.log("Nome OK.");
        return true;
    }
}

function verificamail(mail){
    if (mail.value === ""){

        alert("Email invalido");
        console.log("invalido.");
        return false;
    }
    
    }


function verificacel(cel){

    if (cel.value === ""){

        alert("celular invalido");
        console.log("celular invalido.");
        return false;

    }
    if (length( cel.value) === 9){

        alert("Celular ok");
        console.log("celular OK.");
        return true;

    }

    }


function verificalog (log){

    if (log.value=== ""){

        alert("Login ivalido");
        console.log("Login invalido");
        return false;
    
    }else{
        alert("Login correto");
        console.log("Login correto");
        return true;
    }

    }
