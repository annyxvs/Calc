const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const opera = document.getElementById('operation')

function calcular() {
  const conv1 = parseInt(num1.value)
  const conv2 = parseInt(num2.value)
  if (opera.value == '+') {
    var resultado = conv1 + conv2
    document.getElementById('result').style.display = 'inline'
    document.getElementById(
      'result'
    ).innerHTML = `O resultado da operação é ${resultado}`
  } else if (opera.value == '-') {
    var resultado = conv1 - conv2
    document.getElementById('result').style.display = 'inline'
    document.getElementById(
      'result'
    ).innerHTML = `O resultado da operação é ${resultado}`
  } else if (opera.value == '*') {
    var resultado = conv1 * conv2
    document.getElementById('result').style.display = 'inline'
    document.getElementById(
      'result'
    ).innerHTML = `O resultado da operação é ${resultado}`
  } else {
    var resultado = conv1 / conv2
    document.getElementById('result').style.display = 'inline'
    document.getElementById(
      'result'
    ).innerHTML = `O resultado da operação é ${resultado}`
  }
}
