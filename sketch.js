
let wifiOn = false;
let sensoresOn = false;
let painelOn = false;
let tratorOn = false;
let produtividade = 50;

function setup() {
  createCanvas(700, 400);
  textFont('Arial');
}

function draw() {
  background(140, 200, 90);

  // Céu e Sol
  fill(135, 206, 250);
  rect(0, 0, width, 120);
  fill(255, 220, 80);
  ellipse(80, 60, 70, 70);

  // Plantação
  fill(34, 139, 34);
  rect(100, 250, 500, 90);

  // Casa da fazenda
  fill(180, 100, 60);
  rect(140, 180, 80, 70);
  fill(120, 80, 40);
  triangle(140, 180, 180, 140, 220, 180);

  // Wi-Fi
  drawWifi(180, 150, wifiOn);

  // Painel Solar
  drawPainel(250, 205, painelOn);

  // Sensores
  drawSensor(330, 270, sensoresOn);

  // Trator Autônomo
  drawTrator(460, 280, tratorOn);

  // Barra de produtividade
  fill(80);
  rect(580, 60, 25, 140, 10);
  fill(0, 200, 32);
  rect(580, 200 - produtividade * 1.4, 25, produtividade * 1.4, 10);
  fill(255);
  textSize(13);
  textAlign(CENTER);
  text("Produtividade", 593, 220);
  text(int(produtividade) + "%", 593, 240);

  // Botões interativos
  drawButton(60, 350, "Wi-Fi", wifiOn);
  drawButton(180, 350, "Painel Solar", painelOn);
  drawButton(320, 350, "Sensores", sensoresOn);
  drawButton(470, 350, "Trator Autônomo", tratorOn);

  // Efeitos das tecnologias
  let bonus = 0;
  if (wifiOn) bonus += 10;
  if (painelOn) bonus += 10;
  if (sensoresOn) bonus += 15;
  if (tratorOn) bonus += 15;
  produtividade = lerp(produtividade, 50 + bonus, 0.08);

  // Texto explicativo
  fill(0, 80, 0, 200);
  textSize(17);
  textAlign(CENTER);
  text("Tecnologias urbanas modernizando no campo! A importancia!", width/2, 35);
}

function drawButton(x, y, label, active) {
  fill(active ? color(50, 180, 80) : color(180));
  rect(x, y, 100, 32, 10);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x + 50, y + 16);
}

function mousePressed() {
  // Wi-Fi
  if (mouseX > 60 && mouseX < 160 && mouseY > 350 && mouseY < 382) wifiOn = !wifiOn;
  // Painel Solar
  if (mouseX > 180 && mouseX < 280 && mouseY > 350 && mouseY < 382) painelOn = !painelOn;
  // Sensores
  if (mouseX > 320 && mouseX < 420 && mouseY > 350 && mouseY < 382) sensoresOn = !sensoresOn;
  // Trator Autônomo
  if (mouseX > 470 && mouseX < 570 && mouseY > 350 && mouseY < 382) tratorOn = !tratorOn;
}

function drawWifi(x, y, on) {
  strokeWeight(2);
  stroke(on ? 'blue' : 150);
  noFill();
  arc(x, y, 18, 18, PI, 0);
  arc(x, y, 30, 30, PI, 0);
  arc(x, y, 44, 44, PI, 0);
  fill(on ? 'blue' : 180);
  noStroke();
  ellipse(x, y + 15, 10, 10);
}

function drawPainel(x, y, on) {
  fill(on ? color(70, 110, 220) : 180);
  rect(x, y, 50, 25, 4);
  fill(60);
  rect(x + 20, y + 25, 10, 7, 3);
  fill(0);
  textSize(11);
  textAlign(CENTER);
  text("Painel Solar", x + 25, y + 40);
}

function drawSensor(x, y, on) {
  fill(on ? color(255, 180, 0) : 220);
  ellipse(x, y, 22, 22);
  fill(80);
  rect(x - 5, y + 10, 10, 12, 3);
  fill(0);
  textSize(11);
  textAlign(CENTER);
  text("Sensor", x, y + 32);
}

function drawTrator(x, y, on) {
  fill(on ? color(230, 30, 30) : 180);
  rect(x, y, 48, 23, 6);
  fill(100);
  ellipse(x + 8, y + 21, 20, 20);
  ellipse(x + 38, y + 21, 14, 14);
  fill(0);
  textSize(11);
  textAlign(CENTER);
  text("Trator Autônomo", x + 24, y + 40);
}