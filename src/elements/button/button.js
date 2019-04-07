import './button.css'

const ButtonComponent = {

  view: (vnode) => m('button.default-button', {
      onclick: event => vnode.attrs.onclick(event),
    }, vnode.attrs.name)  

}

export default ButtonComponent

{/* <button onclick={ function(event) { console.log(event) } } >  click me </button>

function handleMe(event) {
  console.log(event)
}  */}