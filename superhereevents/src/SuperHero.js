import React from 'react'
import HeroList from './HeroList'
import data from './data.json'

function SuperHero() {
    const mappedHeros = data.map((hero, i) => {
        return (
            <HeroList
                key={i} name={hero.name} show={hero.show} catchPhrase={hero.catchPhrase} imageName={hero.imageName}
            />)
    })
    return (
        <div className='container'>
            {mappedHeros}
        </div>
    )
}

export default SuperHero
