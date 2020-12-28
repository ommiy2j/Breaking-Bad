import React from 'react'

const EpisodesItem = ({item}) => {
    return (
        <div className="char-container">
            <div className="card-epis card">
                    <div className="card-inner-front-epis">
                    <ul>
                            <li>
                                <strong>Season: </strong>{item.season}
                            </li>
                            <li>
                                <strong>Episode: </strong>{item.episode}
                            </li>
                            <li>
                                <strong>Title: </strong>{item.title}
                            </li>
                            <li>
                            <strong>Characters: </strong>{item.characters.map((item, i) => (
                                <small>{item} </small>
                            ))}
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}



export default EpisodesItem
