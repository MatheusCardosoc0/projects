const result = []
const QuemComeça = []
var LPLula = 450
var LPBolso = 530
const Hp = []
const HpEnemy = []
const turnatt = []

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
  }
  turnatt.push(1)
  var Turntotal = turnatt.length 
  alert(`${Turntotal}`)


  if(QuemComeça[0] == 0){
      EscolhaHabili()
      enemy()
  }
  if(QuemComeça[0] == 1){
      enemy()
      EscolhaHabili()
  }

  if(Math.min(...Hp) <= 0 || Math.min(...HpEnemy) <= 0){
    alert('acabou')
    if(Math.min(...Hp) <= 0){
      document.body.innerHTML = 'Você perdeu!'
    }
    if(Math.min(...HpEnemy) <= 0){
      document.body.innerHTML = 'Você venceu!'
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
    document.body.innerHTML += `<div class='habiliti'>
    <div>
      <h3>Habilidades do Lula</h3> <h4>Vida:${Math.min(...vid)}</h4>
    </div>
      <button onclick='hl1()' class='hl1'>Cachacinha</button>
      <button onclick='hl2()' class='hl2'>Honestitade</button>
      <button onclick='hl3()' class='hl3'>Taxação publica</button>
      <button onclick='hl4()' class='hl4'>Arremeçar Dilma</button>
    </div>`
  }

  if(i == 'Bolsonaro'){
    if(result[0] == 'Bolsonaro'){
      var vid = Hp
    }
    else{
      var vid = HpEnemy
    }
    document.body.innerHTML += `<div class='habiliti'>
    <div>
      <h3>Habilidades do Bolsonaro</h3> <h4>Vida:${Math.min(...vid)}</h4>
    </div>
      <button onclick='hb1()' class='hb1'>Histórico de atleta</button>
      <button onclick='hb2()' class='hb2'>Tiro de fuzil</button>
      <button onclick='hb3()' class='hb3'>Acabou porra!</button>
      <button onclick='hb4()' class='hb4'>Cloroquina</button>
    </div>`
  
  }
  
}
/*===== habilidades =====*/
var Dhl1 = 50
var Dhl3 = 0
var Dhl4 = 150

function hl1(){
  if(result[0] == 'Lula'){
    var cura = Hp[0] + Dhl1
    Hp.splice('')
    Hp.push(cura)
  }
  else{
    var cura = HpEnemy[0] + Dhl1
    HpEnemy.splice('')
    HpEnemy.push(cura)
  }
  turn()/*acontecimento()*/
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