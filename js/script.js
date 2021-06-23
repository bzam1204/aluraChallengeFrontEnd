const setColor = ()=>{
  const inputDeCor = document.querySelector('[data-moldura-cor]')
  var moldura = document.querySelector('[data-moldura]')
  inputDeCor.addEventListener('input', () => {
    const corEscolhida = inputDeCor.value
    moldura.style.backgroundColor = corEscolhida 
  })
}

setColor()




