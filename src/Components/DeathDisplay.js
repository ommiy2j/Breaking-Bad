import React from 'react'

const DeathDisplay = ({item}) => {
    return (
        <div className="quote-card">
            {/* {item.quote} */}
            <div className="quote">
                <div className="quoteNumber">{item.quote_id}</div>
                <p>{item.quote}</p>
                <div className="author">{ item.author }</div>
            </div>

        </div>
    )
}

export default DeathDisplay
