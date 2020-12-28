import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const Characters = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters`)
            console.log(result.data)
            setItems(result.data);
            setIsLoading(false)
        }
        fetchitems();
    },[]) 
    return (
        isLoading ? (
            <Spinner />
        ) :
            (
                <section className="cards">
                    {
                        items.map(item => (
                            <CharacterItem item={item} key={ item.char_id }/>
                        ))
                    }
                </section>
            )
    )
}

export default Characters
