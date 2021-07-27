

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner  } from '@fortawesome/free-solid-svg-icons'

library.add( faSpinner)

Vue.component('fa-icon', FontAwesomeIcon)


