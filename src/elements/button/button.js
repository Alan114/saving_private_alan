import './button.css'

const ButtonComponent = {

  view: () => m('button.default-button', {
      onclick: event => alert('You clicked me.'),
    }, 'Generate grid')
  

}

export default ButtonComponent