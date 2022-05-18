function Ready(){
  if(String(NameSave.value.length) == 0){
    alert('digite seu nome')
  }
  else if(Number(YearSave.value.length) == 0){
    alert('digite sua idade')
  }
  else if(Number(YearSave.value) <= 12){
    alert('Você é muito jovem ainda')
  }
  else if(String(CPFSave.value.length) == 0){
    alert('Digite o seu CPF')
  }
  else if(String(CountrySave.value.length) == 0){
    alert('Digite o nome do seu país')
  }
  else if(String(StateSave.value.length) == 0){
    alert('Digite o nome do seu estado')
  }
  else if(Number(CEPSave.value.length) == 0){
    alert('Digite o seu CEP')
  }
}