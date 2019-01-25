import React from 'react'

import { withBotContext } from './DataProvider'
import BotDetail from './BotDetail';

function BotList({ transformers }) {

    const transformerComponents = transformers.map(transformer => <BotDetail keye ={transformer_id} {...transformer}/>)
    return (
        <div>
            {transformerComponents}
        </div>
    )
}

export default withBotContext(BotList)