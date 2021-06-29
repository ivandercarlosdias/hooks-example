import ReactDOM from 'react-dom'

import { Store } from './data/Store'
import App from './modules/Main'

import './index.scss'

ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.getElementById('root')
)
