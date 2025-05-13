let procuraNumero =  0;
let tentativas =0 ;
let jogoFinalizado = false; //variável para verificar se o jogo foi finalizado.

//Gera um número aleatório

function gerarNumero(){

    procuraNumero = parseInt(Math.random()*100);
    console.log(procuraNumero)   
}

//Verifica se o número é o mesmo sorteado pelo computador

function verificaNumero(event){

 event.preventDefault();

 if (jogoFinalizado) {
    alert('O jogo terminou!Regarregue a página para jogar novamente!')
    return
}

    let palpite = document.getElementById('palpite').value;


    if(palpite > 100 || palpite < 1){
        alert('Palpite Inválido o número deve ser entre 1 a 100');

        return;}

    tentativas++ //Incrementa um número
    document.getElementById('tentativa').innerText = `Tentaiva: ${tentativas}`;

    if (palpite > procuraNumero){
    document.getElementById('dica').innerText = 'O número é MENOR';

    if(tentativas >= 10){
        alert("10 tentativas você perdeu!");
        jogoFinalizado = true;//Marca o jogo finalizado
        location.reload();//Regarrega a página     
    } 

} else if (palpite < procuraNumero){

    document.getElementById('dica').innerText = 'O número é MAIOR'
    if(tentativas >= 10){
        alert("10 tentativas você perdeu!");
        jogoFinalizado = true;//Marca o jogo finalizado
        location.reload();//Recarrega a página
    }

} else {
    document.getElementById('tentativa').innerText = `Tentaiva: ${tentativas}`;
    document.getElementById('dica').innerText = 'Parabéns! Você acertou!';
    jogoFinalizado = true;//Marca o jogo finalizado

}

}

     document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('formulario').addEventListener('submit', verificaNumero);
     gerarNumero();

});
