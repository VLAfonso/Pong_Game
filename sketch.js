nivelDificuldade = Number(window.prompt("Qual a dificuldade do jogo você gostaria de jogar? Resnponda com um número de 1 a 15."))

var largura = 600;
var altura = 400;

var corTabuleiro = "#1F8340";
var corBolinha = 0;

var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;

var velocidadeXBolinha = nivelDificuldade;
var velocidadeYBolinha = nivelDificuldade;

function setup() {
  createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
  background(corTabuleiro);
}

function criarBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
}

function movimentarBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function verificarColisao(){
  if(xBolinha >= (600-(dBolinha/2)) || xBolinha <= (dBolinha/2)){
    velocidadeXBolinha = -1*velocidadeXBolinha;
  }
  if(yBolinha >= (400-(dBolinha/2)) || yBolinha <= (dBolinha/2)){
    velocidadeYBolinha = -1*velocidadeYBolinha;
  }
}

function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha();
  movimentarBolinha();
  verificarColisao();
}