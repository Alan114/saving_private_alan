import './index.css'
import TitleComponent from './elements/title/title'

const root = document.getElementById('app')
const App = {

  view: () => m('div#main-container', [
    m(TitleComponent),
    m('div#input-container',[
      m('input'),
      m('h2','X'),
      m('input')
    ]),
    m('button','Generate grid')
    
  ])
} 

m.mount(root, App)



