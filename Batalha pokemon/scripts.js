const result = []
const QuemComeça = []
var LPLula = 450
var LPBolso = 530
const Hp = []
const HpEnemy = []
const turnatt = []
var player = []
var oponent = []

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
  AttHp()
  AttHpEnemy()
  apresentação()
}
function Bolsonaro(){
  buttonbol.disabled = true
  buttonLu.disabled = true
  result.push('Bolsonaro')
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
  if(turnatt.length == 2){
    turnatt.splice('')
    document.body.innerHTML = ''
  }
  if(turnatt.length >= 4){
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
    alert('acabou')
    if(Math.min(...Hp) <= 0){
      document.body.innerHTML = 'Você perdeu!'
    }
    else if(Math.min(...HpEnemy) <= 0){
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

var Dhl1 = 50
var Dhl3 = 0
var Dhl4 = 150

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
   Dhl1 = Dhl1 + 50
   Dhl4 = Dhl4 + 50
  turn()
}

function hl3(){
   Dhl3 = Dhl3 + 35
   alert(`${Dhl3}`)
   turn()
}

function hl4(){
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
  turn()
}

/*===== habilidades do Bolsonaro =====*/
var BolsoTxtDhb3 = []
var Dhb3 = 30


function hb1(){
  const WhereHability = [2,3]
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var ChoiseHability = WhereHability[random(0, WhereHability.length)]
  if(ChoiseHability == 2){
    hb2(50)
  }
  else if(ChoiseHability == 3){
    hb3()
  }
}
function hb2(y = 0){
  const DPB = [25,45,65]
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);
  var DB1 = DPB[random(0, DPB.length)]
  var DB2 = DPB[random(0, DPB.length)]
  var DB3 = DPB[random(0, DPB.length)]

  if(result[0] == 'Bolsonaro'){
    HpEnemy.sort(decrescente)
    var dano = HpEnemy[0] - (DB1 + DB2 + DB3 + y) 
    alert(`${DB1},${DB2},${DB3}`)
    HpEnemy.push(dano)
  }
  else{
    Hp.sort(decrescente)
    var dano = Hp[0] -  (DB1 + DB2 + DB3 + y)
    alert(`${DB1},${DB2},${DB3}`)
    Hp.push(dano)
  }
  turn()
}
function hb3(){
  BolsoTxtDhb3.push(1)
  if(QuemComeça[0] == 0){
    if(player[0] == 1 && oponent[0] == 2){
      turnatt.push(1)
      hb3Dano()
    }
    else if(player[0] == 2 && oponent[0] == 1){
      turnatt.splice('')
      turnatt.push(1)
      hb3Dano()
    }
  }
  if(QuemComeça[0] == 1){
    if(player[0] == 2 && oponent[0] == 1){
      turnatt.push(1)
      hb3Dano()
    }
    else if(player[0] == 1 && oponent[0] == 2){
      turnatt.splice('')
      turnatt.push(1)
      hb3Dano()
    }
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

/*====== outras funções ======*/


Hp.sort(decrescente)
HpEnemy.sort(decrescente)
function decrescente(a,b){
  return (a - b)
}
function acontecimento(){}

function enemy(){
  alert(`${HpEnemy}`)
  if(result[0] == 'Lula'){
      EscolhaHabili('Bolsonaro')
}
  if(result[0] == 'Bolsonaro'){
      EscolhaHabili('Lula')
}
}
function acontecimento(){
  FalasLula()
  FalasBolsonaro()
  setTimeout(() => {
    turn()
  }, 1500);
}
function FalasLula(){
  if(LulaTxtDhl1[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Lula toma uma cachacinha para recuperar ${Dhl1} pontos de vida.</p>
    </div>`
    LulaTxtDhl1.splice('')
  }
}
function FalasBolsonaro(){
  if(BolsoTxtDhb3[0] == 1){
    document.body.innerHTML += `<div class="acontecimento">
    <p>Bolsonaro mita para cima de seu inimigo o atordoando e causando ${Dhb3} de dano por ferir os sentimentos.</p>
    </div>`
    BolsoTxtDhb3.splice('')
  }
}