import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import DisplayQuote from './DisplayQuote';
import DeathDisplay from './DeathDisplay';






const Deaths = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://www.breakingbadapi.com/api/death-count?name=${query}`);
            console.log(res.data)
            setItems(res.data);
            setIsLoading(false);
        }
        fetchData();
    },[query])



    return (
        <div className="quotes">
            <input
                className="quoteInput"
                type="text"
                placeholder="Enter Character Name..."
                value={query}
                onChange={e=>setQuery(e.target.value)}
            />
            

            {
                 isLoading ? (
                    <Spinner />
                    
                ) :
                    (   
                        items.map((item) => (
                            <DeathDisplay item={item} id={ item.deathCount }/>
                        ))
                    )
            }
        </div>
    )
}

export default Deaths
