import React from 'react';


import ContactCard from './components/ContactCard';

import Styles from './assets/styles.css'

const App = () => {
    return (
        <div className='todo-list'>
            <ContactCard
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />

            <ContactCard
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />

            <ContactCard
                name="Felix"
                imgUrl="http://placekitten.com/200/100"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />


        </div>

    )

}

export default App;