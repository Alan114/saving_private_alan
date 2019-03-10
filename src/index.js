import './index.css'
import TitleComponent from './elements/title/title'

const root = document.getElementById('app')
const App = {

  view: () => m('div#main-container', [
    m(TitleComponent),
    
  ])
} 

m.mount(root, App)



