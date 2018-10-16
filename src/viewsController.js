import { home } from './views/home'
import { about } from './views/about'
import { views } from './views/views'

const viewsController = view => {
  let currentview = ''

  switch(view) {
    case '#views':
      currentview = views()
      break
    case '#about':
      currentview = about()
      break
    default:
      currentview = home()
      break
  }
  document.getElementById('root').innerHTML = currentview
}

export default viewsController