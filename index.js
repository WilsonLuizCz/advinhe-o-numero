let procuraNumero =  0;
let tentativas = 0;

function gerarNumero(){
    

    procuraNumero = parseInt(Math.random()*100);

    console.log(procuraNumero)

}

function verificaNumero(event){
event.preventDefault();
    let palpite = document.getElementById('palpite').value;

    if(palpite > 100 || palpite < 1){

        alert('Palpite Inválido');
 
        return;
     
    }

  if (palpite > procuraNumero){

    tentativas++
    document.getElementById('dica').innerText = 'O número é MENOR'

} else if (palpite < procuraNumero){

    tentativas++
    document.getElementById('dica').innerText = 'O número é MAIOR'

} else{
    document.getElementById('tentativa').innerText = tentativas;
}

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', verificaNumero);
    gerarNumero();
});