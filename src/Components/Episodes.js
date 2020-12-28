import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from './Spinner';
import EpisodesItem from './EpisodesItem';

const Characters = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchitems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/episodes`)
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
                            <EpisodesItem item={item} key={ item.episode_id }/>
                        ))
                    }
                </section>
            )
    )
}

export default Characters
