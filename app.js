const exibicaoTemperatura = document.getElementById('temperatura')
const controleTemperatura = document.getElementById('controleTemperatura')
const aumentarTemp = document.getElementById('aumentar')
const diminuirTemp = document.getElementById('diminuir')
const container = document.querySelector('.container')
const iconeTermometro = document.getElementById('iconeTermometro')

let temperatura = parseInt(controleTemperatura.value, 10)

// função para atualizar o display de temperatura, fundo e ícone
function atualizar() {
  exibicaoTemperatura.textContent = `${temperatura}°C`
  atualizarEstilo(temperatura)
}

// função que altera o background e a foto do termometro
function atualizarEstilo(temp) {
  if (temp <= 0) {
    container.style.background = `linear-gradient(to top, #00f, #87CEEB)`
    iconeTermometro.src = './img/azul.png'
  } else if (temp > 0 && temp <= 25) {
    container.style.background = `linear-gradient(to top, #fff, #FFD700)`
    iconeTermometro.src = './img/laranja.png'
  } else {
    container.style.background = `linear-gradient(to top, #f00, #FFA500)`
    iconeTermometro.src = './img/vermelho.png'
  }
}

// atualiza o valor da temperatura ao arrastar o input range
controleTemperatura.addEventListener('input', () => {
  temperatura = parseInt(controleTemperatura.value, 10)
  atualizar()
})

// aumenta a temperatura
aumentarTemp.addEventListener('click', () => {
  if (temperatura < 40) {
    temperatura += 1
    controleTemperatura.value = temperatura
    atualizar()
  }
})

// diminui a temperatura
diminuirTemp.addEventListener('click', () => {
  if (temperatura > -10) {
    temperatura -= 1
    controleTemperatura.value = temperatura
    atualizar()
  }
})

// aumentar e diminuir a temperatura no teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (temperatura < 40) {
      temperatura += 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  } else if (event.key === 'ArrowDown') {
    if (temperatura > -10) {
      temperatura -= 1
      controleTemperatura.value = temperatura
      atualizar()
    }
  }
})

atualizar()