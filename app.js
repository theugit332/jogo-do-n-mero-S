let ListaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
       campo.innerHTML = texto;
       responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function ExibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

exibirTextoNaTela();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o número secreto é menor');
      } else {
        exibirTextoNaTela('p', 'o número secreto é maior ');
      }
      tentativas++;
      limparCampo();
    }
   }

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let QuantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

    if (QuantidadeDeElementosNaLista == numeroLimite) {
      ListaDeNumerosSorteados = [];
    }
   if (ListaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    ListaDeNumerosSorteados.push(numeroEscolhido);
    console.log(ListaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  ExibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabledm', true)
}