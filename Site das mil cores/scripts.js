var number = []
function aditi(){
  var som = number.length * 1
  return som
}

function iclick(){
    
  const nomes = ['purple','yellow','green','blue','pink'];
  const random = (min,max) => Math.floor(Math.random() * (max - min) + min);

  if(document.body.classList.contains('blue')){
    document.body.classList.remove('blue')
    document.body.classList.add(`${nomes[random(0, 2)]}`)
  }
  if(document.body.classList.contains('pink')){
    document.body.classList.remove('pink')
    document.body.classList.add(`${nomes[random(0, 3)]}`)
  }
  else if(document.body.classList.contains('yellow')){
    document.body.classList.remove('yellow')
    document.body.classList.add(`${nomes[random(2, nomes.length)]}`)
  }
  else if(document.body.classList.contains('green')){
    document.body.classList.remove('green')
    document.body.classList.add(`${nomes[random(0,1)]}`)
  }
  else if(document.body.classList.contains('purple')){
    document.body.classList.remove('purple')
    document.body.classList.add(`${nomes[random(1, nomes.length)]}`)
  }
  
  number.push(1)
  if(aditi() == 4){
    alert('Para de apertar isso seu pisada')
  }
  if(aditi() == 7){
    alert('Já falei para parar')
  }
  if(aditi() == 10){
    alert('É o ultimo aviso')
  }
  if(aditi() == 12){
    alert('Poha cansei, vou atrás de você otario, fica esperto')
    imageicon.classList.add('scape')
  }
  
}

