import React from 'react';

const Joke = (props) => {
    return (
        <div className="joke">
            <h1>{props.question}</h1>
            <h3>{props.punchLine}</h3>
           

        </div>
    )
}

export default Joke;