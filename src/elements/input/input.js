import './input.css'

const InputComponent = {

  view: vnode =>  m('input.grid-input', {
    type: 'number',    
    //value: '',
    oninput: event => vnode.attrs.oninput(event.target.value),
  })
 
}

export default InputComponent
