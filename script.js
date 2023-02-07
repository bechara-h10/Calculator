let currentTotal = 0
let previousNumber = 0
let operatorClicked = false
let previousOperator = ''
const screen = document.querySelector('.screen').querySelector('input')
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.onclick = (e) => {
    if(e.target.dataset.value === 'clear' || e.target.dataset.value === 'delete'){
      handleActions(e.target.dataset.value)
    } else if(e.target.dataset.value === 'divide' || e.target.dataset.value==='times' || e.target.dataset.value === 'minus' || e.target.dataset.value === 'plus' || e.target.dataset.value === 'equals'){
      handleOperation(e.target.dataset.value)
    } else {
      handleNumber(e.target.dataset.value)
    }
  }
})

function handleActions(action){
  if(action === 'clear'){
    screen.value = '0'
    currentTotal = 0
    operatorClicked = false
    previousOperator = ''
    previousNumber = 0
  } else if(action === 'delete'){
    screen.value = screen.value.slice(0, screen.value.length - 1)
    if(screen.value.length == 0) {
      screen.value = '0'
    }
  }
}

function handleOperation(operator){
  switch(operator){
    case 'plus':
    case 'minus':
    case 'times':
    case 'divide':
      previousOperator = operator
      currentTotal = parseInt(screen.value) 
      operatorClicked = true
      break
    case 'equals':
      handleMath(previousOperator)
      screen.value = currentTotal
    default:
      break
  }
}

function handleNumber(number){
  if(screen.value == '0' || operatorClicked){
    screen.value = number
    operatorClicked = false
  }
  else {
    screen.value+= number
  }
}

function handleMath(previousOperator){
  switch(previousOperator){
    case 'plus':
      currentTotal+= parseInt(screen.value)
      break
    case 'minus':
      currentTotal-= parseInt(screen.value)
      break
    case 'times':
      currentTotal*= parseInt(screen.value)
      break
    case 'divide':
      currentTotal/= parseInt(screen.value)
      break
    default: 
      break
  }
}