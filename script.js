window.addEventListener('scroll', onScroll)
onScroll()

function openMenu(){
  document.body.classList.add('menu-max')
}
function closeMenu(){
  document.body.classList.remove('menu-max')
}

function aperte(){
  monkey.classList.add('monkey-ressurge')
  setTimeout(() => {
    talkMonkey()
    removeclass()
  }, 2000);
}

function removeclass(){
 monkey.classList.remove('monkey-ressurge')
}
function talkMonkey(){
  alert('Assina ae cara!, é só R$199999.99, e você poderá me levar de presente, maneiro né?')
}

function onScroll(){
  if(scrollY > 100){
    navigation.classList.add('scroll')
  }
  else if(scrollY == 0){
    navigation.classList.remove('scroll')
  }
}