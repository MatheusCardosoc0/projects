const result = []
const resultEnemy = []
const QuemComeça = []
var LPLula = 450
var LPBolso = 530
const Hp = []
const HpEnemy = []
const turnatt = []
var player = []
var oponent = []
var acabou = []

function AttHp(i = 0){
  if(result[0] == 'Lula'){
    var resultHp = LPLula - i
    Hp.push(resultHp)
  }
  if(result[0] == 'Bolsonaro'){
    var resultHp = LPBolso - i
    Hp.push(resultHp)
  }
}

function AttHpEnemy(i = 0){
  if(result[0] == 'Lula'){
    var resultHpEnemy = LPBolso - i
    HpEnemy.push(resultHpEnemy)
  }
  if(result[0] == 'Bolsonaro'){
    var resultHpEnemy = LPLula - i
    HpEnemy.push(resultHpEnemy)
  }
}

var newdiv = document.createElement('div')
var p = document.createElement('p')
newdiv.appendChild(p)
newdiv.setAttribute('class', 'elemi')



function Lula(){
  buttonbol.disabled = true
  buttonLu.disabled = true
  result.push('Lula')
  resultEnemy.push('Bolsonaro')
  AttHp()
  AttHpEnemy()
  apresentação()
}
function Bolsonaro(){
  buttonbol.disabled = true
  buttonLu.disabled = true
  result.push('Bolsonaro')
  resultEnemy.push('Lula')
  AttHp()
  AttHpEnemy()
  apresentação()
}

function apresentação(){

   if(result[0] == 'Lula'){
     p.textContent ='Você escolheu Lula e seu oponente escolheu Bolsonaro.'
     document.body.appendChild(newdiv)
     setTimeout(() => {
       anun()
     }, 1000);
   }

   if(result[0] == 'Bolsonaro'){
     p.textContent = 'Você escolheu Bolsonaro e seu oponente escolheu Lula.'
     document.body.appendChild(newdiv)
     setTimeout(() => {
      anun()
    }, 1000);
   }
}
function anun(){
  document.body.innerHTML += '<h2>A batalha Começara!'
  CaraCoroa()
}

/*======== Sistema de cara ou coroa =====*/

function CaraCoroa(){
  document.body.innerHTML += `<div class='Coin'>
  <button onclick='cara()' class='butt' id='butt2'>Cara</button>
  <button onclick='coroa()' id='butt1' class='butt'>Coroa</button>
  </div>`
}

function cara(){
  const typescoin = ['cara', 'coroa']
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var ResultCoin = typescoin[random(0, typescoin.length)]

    if(ResultCoin === 'cara'){
      document.body.innerHTML = '<h4>Seu inimigo começará primeiro'
      QuemComeça.push(1)
      turn()
    }
    else if(ResultCoin === 'coroa'){
      document.body.innerHTML = '<h4>Você começará primeiro'
      QuemComeça.push(0)
      turn()
    }
  


    butt1.disabled = true
    butt2.disabled = true
}

function coroa(){
  const typescoin = ['cara', 'coroa']
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var ResultCoin = typescoin[random(0, typescoin.length)]

    if(ResultCoin === 'cara'){
      document.body.innerHTML = '<h4>Seu inimigo começará primeiro'
      QuemComeça.push(1)
      turn()
    }
    else if(ResultCoin === 'coroa'){
      document.body.innerHTML = '<h4>Você começará primeiro'
      QuemComeça.push(0)
      turn()
    }


    butt2.disabled = true
    butt1.disabled = true
}

function randomCoin(){
  const typescoin = ['cara', 'coroa']
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var ResultCoin = typescoin[random(0, typescoin.length)]
  
  return ResultCoin
}

function turn(){
  if(turnatt.length == 1){
    document.body.innerHTML = ''
  }
  else if(turnatt.length == 2){
    turnatt.splice('')
    document.body.innerHTML = ''
  }
  else if(turnatt.length >= 3){
    turnatt.splice('')
    document.body.innerHTML = ''
  }
  turnatt.push(1)
  var Turntotal = turnatt.length 
  alert(`${Turntotal}`)
  
  if(QuemComeça[0] == 0){
      EscolhaHabili()
      enemy()
      player.splice('')
      oponent.splice('')
      player.push(1)
      oponent.push(2)
  }
  if(QuemComeça[0] == 1){
      enemy()
      EscolhaHabili()
      player.splice('')
      oponent.splice('')
      player.push(2)
      oponent.push(1)
  }
  turnType()

  if(Math.min(...Hp) <= 0 || Math.min(...HpEnemy) <= 0){
    acabou.push(1)
    alert('acabou')
    if(Math.min(...Hp) <= 0){
      turnatt.splice('')
      document.body.innerHTML = 'Você perdeu!'
    }
    else if(Math.min(...HpEnemy) <= 0){
      turnatt.splice('')
      document.body.innerHTML = 'Você venceu!'
    }
  }
}

function turnType(){
  alert(`${player}`)
  alert(`${oponent}`)
  
  if(turnatt.length == 1){
    if(player[0] == 1){
      document.body.classList.remove('DisabledButtonsPlayer')
      document.body.classList.add('DisabledButtonsOponent')
    }
  }
  else if(turnatt.length == 2){
    if(player[0] == 1){
      document.body.classList.remove('DisabledButtonsOponent')
      document.body.classList.add('DisabledButtonsPlayer')
    }
  }
  if(turnatt.length == 1){
    if(player[0] == 2){
      document.body.classList.add('DisabledButtonsPlayer')
      document.body.classList.remove('DisabledButtonsOponent')
    }
  }
  else if(turnatt.length == 2){
    if(player[0] == 2){
      document.body.classList.add('DisabledButtonsOponent')
      document.body.classList.remove('DisabledButtonsPlayer')
    }
  }


}
function EscolhaHabili(i = result[0]){

  if(i == 'Lula'){
    if(result[0] == 'Lula'){
      var vid = Hp
    }
    else{
      var vid = HpEnemy
    }
    if(result[0] == 'Lula'){
      var TypeJog = 'Ally'
    }
    else{
      var TypeJog = 'Hostily'
    }

    document.body.innerHTML += `<div class='${TypeJog}'
    id='habiliti'>
    <div>
      <h3>Habilidades do Lula</h3> <h4>Vida:${Math.min(...vid)}</h4>
    </div>
    <div>
      <button onclick='hl1()' class='hl1' id='Lul' >Cachacinha</button>
      <button onclick='hl2()' class='hl2' id='Lul'>Honestitade</button>
      <button onclick='hl3()' class='hl3' id='Lul'>Taxação publica</button>
      <button onclick='hl4()' class='hl4' id='Lul'>Arremeçar Dilma</button>
    </div>
    </div>`
  }

  if(i == 'Bolsonaro'){
    if(result[0] == 'Bolsonaro'){
      var vid = Hp
    }
    else{
      var vid = HpEnemy
    }
    if(result[0] == 'Bolsonaro'){
      var TypeJog = 'Ally'
    }
    else{
      var TypeJog = 'Hostily'
    }
    
    document.body.innerHTML += `<div class='${TypeJog}' id='habiliti'>
    <div>
      <h3>Habilidades do Bolsonaro</h3> <h4>Vida:${Math.min(...vid)}</h4>
    </div>
    <div>
      <button onclick='hb1()' class='hb1' id='Bolso'>Histórico de atleta</button>
      <button onclick='hb2()' class='hb2' id='Bolso'>Tiro de fuzil</button>
      <button onclick='hb3()' class='hb3' id='Bolso'>Acabou porra!</button>
      <button onclick='hb4()' class='hb4' id='Bolso'>Cloroquina</button>
    </div>
    </div>`
  
  }
  
}
/*===== habilidades do Lula =====*/

var LulaTxtDhl1 = []
var LulaTxtDhl2 = []
var LulaTxtDhl3 = []
var LulaTxtDhl4 = []

var Dhl1 = 120
var Dhl3 = 0
var Dhl4 = 200

function hl1(){
  LulaTxtDhl1.push(1)
  if(result[0] == 'Lula'){
    Hp.sort(decrescente)
    var cura = Hp[0] + Dhl1
    Hp.splice('')
    Hp.push(cura)
  }
  else{
    HpEnemy.sort(decrescente)
    var cura = HpEnemy[0] + Dhl1
    HpEnemy.splice('')
    HpEnemy.push(cura)
    alert(`${cura}`)
  }
  acontecimento()
}

function hl2(){
  LulaTxtDhl2.push(1)
   Dhl1 = Dhl1 + 50
   Dhl4 = Dhl4 + 50
  acontecimento()
}

function hl3(){
  LulaTxtDhl3.push(1)
   Dhl3 = Dhl3 + 50
   alert(`${Dhl3}`)
   acontecimento()
}
/*function imposto(i = Dhl3){
  if(QuemComeça[0] == 0){
    if(turnatt.length >= 2){
      impostLula()
    }
    else{
      impostLula()
    }
  }
  if(QuemComeça[0] == 1){
    if(turnatt.length == 1){
      impostLula()
    }
    else{
      impostLula()
    }
  }
}*/
function imposto(i = Dhl3){
  if(result[0] == 'Lula'){
    HpEnemy.sort(decrescente)
    var DImpost = HpEnemy[0] - i
    HpEnemy.push(DImpost)
  }
  else if(result[0] != 'Lula'){
    Hp.sort(decrescente)
    var DImpost = Hp[0] - i
    Hp.push(DImpost)
  }
}


function hl4(){
  LulaTxtDhl4.push(1)
  if(result[0] == 'Lula'){
    HpEnemy.sort(decrescente)
    var dano = HpEnemy[0] - Dhl4
    HpEnemy.push(dano)
  }
  else{
    Hp.sort(decrescente)
    var dano = Hp[0] - Dhl4
    Hp.push(dano)
  }
  acontecimento()
}

/*===== habilidades do Bolsonaro =====*/
var BolsoTxtDhb2 = []
var BolsoTxtDhb3 = []
var BolsoTxtDhb4 = []

var Dhb3 = 40
var Dhb4 = 0

var DDB1 = 0
var DDB2 = 0
var DDB3 = 0


function hb1(){

  alert('Bolsonaro demonstra suas habilidades atleticas, ativando uma de suas outras habilidades aleatóriamente e causando +50 de dano.')

  if(result[0] == 'Bolsonaro'){
    HpEnemy.sort(decrescente)
    var dano = HpEnemy[0] - 50
    HpEnemy.push(dano)
  }
  else{
    Hp.sort(decrescente)
    var dano = Hp[0] -  50
    Hp.push(dano)
  }

  imposto()
  const WhereHability = [2,3]
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var ChoiseHability = WhereHability[random(0, WhereHability.length)]
  if(ChoiseHability == 2){
    hb2()
  }
  else if(ChoiseHability == 3){
    hb4()
  }
}
function hb2(){
  imposto()
 
  BolsoTxtDhb2.push(1)
  const DPB = [25,45,65]
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var DB1 = DPB[random(0, DPB.length)]
  var DB2 = DPB[random(0, DPB.length)]
  var DB3 = DPB[random(0, DPB.length)]

  if(result[0] == 'Bolsonaro'){
    HpEnemy.sort(decrescente)
    var dano = HpEnemy[0] - (DB1 + DB2 + DB3) 
    alert(`${DB1},${DB2},${DB3}`)
    DDB1 = DB1
    DDB2 = DB2
    DDB3 = DB3
    HpEnemy.push(dano)
  }
  else{
    Hp.sort(decrescente)
    var dano = Hp[0] -  (DB1 + DB2 + DB3)
    alert(`${DB1},${DB2},${DB3}`)
    DDB1 = DB1
    DDB2 = DB2
    DDB3 = DB3
    Hp.push(dano)
  }
  acontecimento()
}
function hb3(){
  imposto()
  BolsoTxtDhb3.push(1)

  if(turnatt.length == 1){
     turnatt.push(1,1,1)
     hb3Dano()
  }
  else if(turnatt.length == 2){
    turnatt.splice('')
    turnatt.push(1)
    hb3Dano()
  }
  acontecimento()
}
function hb3Dano(){
  if(result[0] == 'Bolsonaro'){
    HpEnemy.sort(decrescente)
    var dano = HpEnemy[0] - (Dhb3) 
    HpEnemy.push(dano)
  }
  else{
    Hp.sort(decrescente)
    var dano = Hp[0] -  (Dhb3)
    Hp.push(dano)
  }
}
function hb4(){
  imposto()
  BolsoTxtDhb4.push(1)
  Dhb4 = Dhb4 + 20
  hb3Dano()

/*== redução do poder das habilidades ==*/

  Dhl1 = Dhl1 - 20
  Dhl4 = Dhl4 - 20

  acontecimento()
}

/*===================== 
outras funções ======*/


Hp.sort(decrescente)
HpEnemy.sort(decrescente)
function decrescente(a,b){
  return (a - b)
}

function enemy(){
  alert(`${HpEnemy}`)
  if(result[0] == 'Lula'){
      EscolhaHabili('Bolsonaro')
}
  else if(result[0] == 'Bolsonaro'){
      EscolhaHabili('Lula')
}
if(acabou[0] != 1){
  IAEnemy()
}

}
function acontecimento(){
  FalasLula()
  FalasBolsonaro()
  if(Math.min(...Hp) >= 0 || Math.min(...HpEnemy) >= 0){
    setTimeout(() => {
      turn()
    }, 1500);
}
}
function FalasLula(){
  if(LulaTxtDhl1[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Lula toma uma cachacinha para recuperar ${Dhl1} pontos de vida.</p>
    </div>`
    LulaTxtDhl1.splice('')
  }
  else if(LulaTxtDhl2[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Lula mostra que é o homen mais honesto do Brasil para seus fãs e aumenta o poder de suas habilidades em 50 pontos</p>
    </div>`
    LulaTxtDhl2.splice('')
  }
  else if(LulaTxtDhl3[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Lula cria uma nova lei, agora para ativar uma habilidade o inimigo dele terá que pagar ${Dhl3} pontos de vida.</p>
    </div>`
    LulaTxtDhl3.splice('')
  }
  else if(LulaTxtDhl4[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Lula pega e aremeça a Dilminha no inimigo causando ${Dhl4} de dano.</p>
    </div>`
    LulaTxtDhl4.splice('')
  }
}
function FalasBolsonaro(){

  if(BolsoTxtDhb2[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Bolsonaro saca um fuzil e atira, as balas causam ${DDB1}, ${DDB2} e ${DDB3} de dano respectivamente.</p>
    </div>`
    BolsoTxtDhb2.splice('')
  }
  else if(BolsoTxtDhb3[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Bolsonaro mita para cima de seu inimigo o atordoando e causando ${Dhb3} de dano por ferir os sentimentos.</p>
    </div>`
    BolsoTxtDhb3.splice('')
  }
  else if(BolsoTxtDhb4[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Bolsonaro salta e aplica cloroquina a força no inimigo, fazendo com que ele perca ${Dhb4} pontos de habilidade e ${Dhb3} pontos de vida.</p>
    </div>`
    BolsoTxtDhb4.splice('')
  }
}
function IAEnemy(){
  if(QuemComeça[0] == 0){
    if(turnatt.length == 1){
      return 0
    }
    else{
      EnemyBolso()
    }
  }
  if(QuemComeça[0] == 1){
    if(turnatt.length == 2){
      return 0
    }
    else{
      EnemyBolso()
    }
  }
}
function EnemyBolso(){
  if(resultEnemy[0] == 'Bolsonaro'){
    const habilities = [1,2,3,4]
    const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
    var Resulthabilities = habilities[random(0, habilities.length)]
    
    if(Resulthabilities == 1){
      hb1()
      habilities.splice('1')
      alert(`${habilities}`)
    }
    if(Resulthabilities == 2){
      hb2()
      habilities.splice(2)
      alert(`${habilities}`)
    }
    if(Resulthabilities == 3){
      hb3()
      habilities.splice('3')
      alert(`${habilities}`)
    }
    if(Resulthabilities == 4){
      hb4()
      habilities.splice(4)
      alert(`${habilities}`)
    }
  }
}

function EnemyLula(){}
