import viewsController from './src/viewsController'

window.onload = () => {
  window.addEventListener('hashchange', () => {
    viewsController(window.location.hash)
  })
  document.getElementById('changeHash').addEventListener('click', () => {
    window.location.hash = window.location.hash === '#views' ? '#about' : '#views'
  })
  viewsController(window.location.hash)
}