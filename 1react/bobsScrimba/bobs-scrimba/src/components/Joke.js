import React from 'react';

const Joke = (props) => {
    return (
        <div className="joke">
            <h1>{props.joke.question}</h1>
            <h3>{props.joke.punchLine}</h3>
           

        </div>
    )
}

export default Joke;