let procuraNumero =  0;
let tentativas =0 ;

function gerarNumero(){

    procuraNumero = parseInt(Math.random()*100);

    console.log(procuraNumero)

    

}

function verificaNumero(event){

 event.preventDefault();

    let palpite = document.getElementById('palpite').value;

    if(palpite > 100 || palpite < 1){

        alert('Palpite Inválido o número deve ser menor que 100');
 
        return;

    }

  if (palpite > procuraNumero){

    tentativas++
    document.getElementById('dica').innerText = 'O número é MENOR'
    if(tentativas >= 10){
        alert(
            "10 tentativas você perdeu!"
        ) 
         
    } 
} else if (palpite < procuraNumero){

    tentativas++
    document.getElementById('dica').innerText = 'O número é MAIOR'
    if(tentativas >= 11){
        alert(
            "10 tentativas você perdeu!"
        )
    }

} else {
    document.getElementById('tentativa').innerText = tentativas;
    document.getElementById('dica').innerText = 'Parabéns! Você acertou!';

}

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', verificaNumero);

    gerarNumero();

});
