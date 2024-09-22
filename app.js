const exibicaoTemperatura = document.getElementById('temperatura')
const controleTemperatura = document.getElementById('tempRange')
const aumentarTemp = document.getElementById('aumentar')
const diminuirTemp = document.getElementById('diminuir')
const iconeClima = document.querySelector('.display img')

let temperatura = parseInt(controleTemperatura.value, 10) // pega o valor inicial do range

// função para atualizar o display de temperatura e o ícone
function atualizar() {
  exibicaoTemperatura.textContent = `${temperatura}°C`
  atualizarIconeClima(temperatura) // atualiza o ícone baseado na temperatura
}

// função para alterar a imagem conforme a temperatura
function atualizarIconeClima(temp) {
  if (temp <= 0) {
    iconeClima.src = '/img/snow.svg'
  } else if (temp > 0 && temp <= 15) {
    iconeClima.src = '/img/cloudy.svg'
  } else if (temp > 15 && temp <= 25) {
    iconeClima.src = '/img/rain.svg'
  } else {
    iconeClima.src = '/img/sunny.svg'
  }
}

// atualiza o valor da temperatura ao arrastar o range
controleTemperatura.addEventListener('input', () => {
  temperatura = parseInt(controleTemperatura.value, 10)
  atualizar()
})

// aumenta a temperatura com o botão
aumentarTemp.addEventListener('click', () => {
  if (temperatura < 40) {
    temperatura += 1
    controleTemperatura.value = temperatura // atualiza o valor do range também
    atualizar()
  }
})

// diminui a temperatura com o botão
diminuirTemp.addEventListener('click', () => {
  if (temperatura > -10) {
    temperatura -= 1
    controleTemperatura.value = temperatura // atualiza o valor do range também
    atualizar()
  }
})

// eventos de teclado para aumentar/diminuir a temperatura
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    // aumenta a temperatura com a tecla "seta para a direita"
    if (temperatura < 40) {
      temperatura += 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  } else if (event.key === 'ArrowLeft') {
    // diminui a temperatura com a tecla "seta para a esquerda"
    if (temperatura > -10) {
      temperatura -= 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  }
})

// inicializa a exibição
atualizar()