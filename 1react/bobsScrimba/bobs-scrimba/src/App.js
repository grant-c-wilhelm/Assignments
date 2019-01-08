import React from 'react';

import Styles from './assets/styles.css';

import Joke from './components/Joke';
import jokesData from './components/jokeData';
import ProductComps from './components/ProductComps';

const App = () => {
    const jokeComponents = jokesData.map((joke) => {   /*joke in () is each individual joke object the function will recieve. () not necessary. */
        return ( /*return is not neccesarry when using arrow functions*/
            <Joke key = {joke} question={joke.question} punchLine={joke.punchLine} />
        )
    })
    return (
        <div>
            {jokeComponents}
            <ProductComps />
        </div>
    )
}

export default App;