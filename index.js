let procuraNumero =  0;
let tentativas = 0;

function gerarNumero(){
    

    procuraNumero = parseInt(Math.random()*100);

    console.log(procuraNumero)

}

function verificaNumero(){

    let palpite = document.getElementById('palpite').value

    if(palpite > 100 || palpite < 1){

        alert('Palpite Inválido');
        return;


    } 

  if (palpite > procuraNumero){

    tentativas++
    alert('O número para ser encontrado é MENOR')

} else if (palpite < procuraNumero){

    tentativas++
    alert('O número para ser encontrado é MAIOR')

} else{
    alert('Parabéns você acertou! com '+tentativas+' erros.')
}

}

gerarNumero();