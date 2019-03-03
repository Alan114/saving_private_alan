import './elements.css'

export function createElements() {
  const box = document.createElement('div')

  box.style.width = '300px'
  box.style.height = '300px'
  box.style.backgroundColor = '#123656'

  box.onclick = function() {
    console.log('mamsanjsnfjasnfj')
  }

  document.body.append(box)

}

export function boxContainer() {
  const container = document.createElement('div')
  container.className = 'main-container'

  document.body.append(container)
}