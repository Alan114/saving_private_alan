import './index.css'
import TitleComponent from './elements/title/title'
import InputComponent from './elements/input/input'
import { changeInputX, changeInputY } from './store/state';

const root = document.getElementById('app')
const App = {

  view: () => m('div#main-container', [
    m(TitleComponent),
   
    m(InputComponent, {
      oninput: value => changeInputX(value)
    }),

    m(InputComponent, {
      oninput: value => changeInputY(value)
    })
    
  ])
} 

m.mount(root, App)



