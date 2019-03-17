let STATE = {
  inputX: '',
  inputY: ''
}

export const changeInputX = value => STATE.inputX = value
export const changeInputY = value => STATE.inputY = value


setInterval(() => {
  console.log(STATE)
}, 5000);