import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItems from './CharacterItems'

const Charactergrid = ({isLoading,items}) => {
    return isLoading ? (<Spinner />) : (<section className="cards">
        {items.map(item => (
            <CharacterItems  
            key={item.char_id} 
            item =  {item}
            />
        ))}

    </section>)
}
export default Charactergrid