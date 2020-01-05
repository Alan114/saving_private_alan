import './index.css'
import TitleComponent from './elements/title/title'
import InputComponent from './elements/input/input'
import { changeInputX, changeInputY } from './store/state';
import ButtonComponent from './elements/button/button'
import ParagraphComponent from './elements/p-component/p'

const root = document.getElementById('app')
const App = {

  view: () => m('div#main-container', [
    m(TitleComponent),
   
    m(InputComponent, {
      oninput: value => changeInputX(value)
    }),

    m(InputComponent, {
      oninput: value => changeInputY(value)
    }),
    m(ButtonComponent, {
      
    }),
    m(ParagraphComponent)
    
  ])
} 

m.mount(root, App)



