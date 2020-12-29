import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import DisplayQuote from './DisplayQuote';






const Quotes = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://www.breakingbadapi.com/api/quote?author=${query}`);
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
                            <DisplayQuote item={item} id={ item.quote_id }/>
                        ))
                    )
            }
        </div>
    )
}

export default Quotes
