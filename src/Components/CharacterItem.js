import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className="char-container">
            <div className="card">
                <div className="card-inner-front">
                    <div className="card-img">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="card-details-back">
                        <h1>{item.name}</h1>
                        <ul>
                            <li>
                                <strong>Name: </strong>{item.name}
                            </li>
                            <li>
                                <strong>Nickname: </strong>{item.nickname}
                            </li>
                            <li>
                                <strong>Occupation: </strong>{item.occupation[0]}
                            </li>
                            <li>
                                <strong>Status: </strong>{item.status}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
