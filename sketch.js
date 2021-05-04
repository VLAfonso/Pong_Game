//nivelDificuldade = Number(window.prompt("Qual a dificuldade do jogo você gostaria de jogar? Resnponda com um número de 1 a 9."))

nivelDificuldade = 1;

var largura = 600;
var altura = 400;

var corTabuleiro = "#1F8340";
var corBolinha = 0;

var xBolinha = largura/2;
var yBolinha = altura/2;
var dBolinha = 20;

var velocidadeXBolinha = nivelDificuldade * 2;
var velocidadeYBolinha = nivelDificuldade * 2;

var lRaquete = 15;
var aRaquete = 150;
var vRaquete = nivelDificuldade * 1.5;

var xRaqueteEsquerda = 10;
var yRaqueteEsquerda = (altura/2 - aRaquete/2);

var xRaqueteDireita = largura - lRaquete - xRaqueteEsquerda;
var yRaqueteDireita = (altura/2 - aRaquete/2);

var pontosEsquerda = 0;
var pontosDireita = 0;

function setup() {
  createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
  background(corTabuleiro);
}

function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha){
  circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
}

function criarRaqueteEsquerda(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete){
  rect(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
}

function criarRaqueteDireita(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete){
  rect(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
}

function movimentarBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function movimentarRaqueteEsquerda(){
  if (keyIsDown(87)){
    if(yRaqueteEsquerda>=0){
       yRaqueteEsquerda = yRaqueteEsquerda - vRaquete;
    }
  }
  if (keyIsDown(83)){
    if(yRaqueteEsquerda+aRaquete <= altura){
      yRaqueteEsquerda = yRaqueteEsquerda + vRaquete;
    }
  }
}

function movimentarRaqueteDireita(){
  if (keyIsDown(UP_ARROW)){
    if(yRaqueteDireita>=0){
       yRaqueteDireita = yRaqueteDireita - vRaquete;
    }
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yRaqueteDireita+aRaquete <= altura){
      yRaqueteDireita = yRaqueteDireita + vRaquete;
    }
  }
}

function verificarColisaoBolinhaParede(){
  if(xBolinha >= (600-(dBolinha/2)) || xBolinha <= (dBolinha/2)){
    velocidadeXBolinha = -1*velocidadeXBolinha;
  }
  if(yBolinha >= (400-(dBolinha/2)) || yBolinha <= (dBolinha/2)){
    velocidadeYBolinha = -1*velocidadeYBolinha;
  }
}

function verificarColisaoBolinhaRaqueteEsquerda(){
  if ((xBolinha-(dBolinha/2) <= xRaqueteEsquerda+lRaquete)&& (yBolinha+(dBolinha/2) >= yRaqueteEsquerda) && (yBolinha-(dBolinha/2) <= yRaqueteEsquerda + aRaquete)){
    velocidadeXBolinha = velocidadeXBolinha*-1;
    pontosEsquerda = pontosEsquerda+1;
  }
}  

function incluirPlacar(){
  textSize(22);
  text("Player 1: "+pontosEsquerda+" | Player 2: "+pontosDireita,(largura/2)-110, 22);
}

function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
  movimentarBolinha();
  verificarColisaoBolinhaParede();
  criarRaqueteEsquerda(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
  criarRaqueteDireita(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
  movimentarRaqueteEsquerda();
  movimentarRaqueteDireita();
  verificarColisaoBolinhaRaqueteEsquerda();
  incluirPlacar();
}