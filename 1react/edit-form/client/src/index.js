import React from 'react'
import {render} from 'react-dom'

import App from './App'
import BountyProvider from './BountyProvider';

render(
    <BountyProvider>
        <App />
    </BountyProvider>,
    document.getElementById('root')
)
