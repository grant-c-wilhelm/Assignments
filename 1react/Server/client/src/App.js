import React from 'react'
import DataProvider from './DataProvider'
import BotList from './BotList';

function App (){
    return (
        <div>
            <header>
                <h1>Bot list</h1>
            </header>
            <BotList />
            {/* <DataProvider /> */}
        </div>
    )
}
export default App