import React from 'react';


import Joke from './components/Joke';

import Styles from './assets/styles.css'

const App = () => {
    return (
        <div className='todo-list'>
            <Joke
                joke={{
                    question: "Whys the sky blue",
                    punchLine: "because"
                    }}
            />
            <Joke
                joke={{
                    question: "Whys the sky red",
                    punchLine: "its not"
                    }}
            />
            <Joke
                joke={{
                    question: "Whys the sky yellow",
                    punchLine: "go away"
                    }}
            />
            <Joke
                joke={{
                    question: "Whys the sky yellow",
                    punchLine: "go away"
                    }}
            />
            <Joke
                joke={{
                    question: "Whys the sky yellow",
                    punchLine: "go away"
                    }}
            />
            
        </div>
    )
}

export default App;