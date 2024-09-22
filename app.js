const exibicaoTemperatura = document.getElementById('temperatura')
const controleTemperatura = document.getElementById('controleTemperatura')
const aumentarTemp = document.getElementById('aumentar')
const diminuirTemp = document.getElementById('diminuir')
const container = document.querySelector('.container')
const iconeTermometro = document.getElementById('iconeTermometro')

let temperatura = parseInt(controleTemperatura.value, 10)

// Função para atualizar o display de temperatura, fundo e ícone
function atualizar() {
  exibicaoTemperatura.textContent = `${temperatura}°C`
  atualizarFundo(temperatura)
  atualizarIconeTermometro(temperatura)
}

// Função para alterar o fundo conforme a temperatura
function atualizarFundo(temp) {
  if (temp <= 0) {
    container.style.background = `linear-gradient(to top, #00f, #87CEEB)` // Gradiente azul
  } else if (temp > 0 && temp <= 25) {
    container.style.background = `linear-gradient(to top, #fff, #FFD700)` // Gradiente neutro
  } else {
    container.style.background = `linear-gradient(to top, #f00, #FFA500)` // Gradiente vermelho
  }
}

// Função para alterar o ícone do termômetro conforme a temperatura
function atualizarIconeTermometro(temp) {
  if (temp <= 0) {
    iconeTermometro.src = '/img/thermometer-cold.svg' // Ícone para frio
  } else if (temp > 0 && temp <= 25) {
    iconeTermometro.src = '/img/thermometer-neutral.svg' // Ícone para temperatura amena
  } else {
    iconeTermometro.src = '/img/thermometer-hot.svg' // Ícone para calor
  }
}

// Atualiza o valor da temperatura ao arrastar o range
controleTemperatura.addEventListener('input', () => {
  temperatura = parseInt(controleTemperatura.value, 10)
  atualizar()
})

// Aumenta a temperatura com o botão
aumentarTemp.addEventListener('click', () => {
  if (temperatura < 40) {
    temperatura += 1
    controleTemperatura.value = temperatura
    atualizar()
  }
})

// Diminui a temperatura com o botão
diminuirTemp.addEventListener('click', () => {
  if (temperatura > -10) {
    temperatura -= 1
    controleTemperatura.value = temperatura
    atualizar()
  }
})

// Eventos de teclado para aumentar/diminuir a temperatura
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // Aumenta a temperatura com a tecla "Seta para cima"
    if (temperatura < 40) {
      temperatura += 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  } else if (event.key === 'ArrowDown') {
    // Diminui a temperatura com a tecla "Seta para baixo"
    if (temperatura > -10) {
      temperatura -= 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  }
})

atualizar()