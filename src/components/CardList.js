import React from 'react';
import Card from './Card';

const CardList = ({ UserImages }) => {
    return (
        <div>
            {
                UserImages.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={UserImages[i].id}
                            Image={UserImages[i].Image}
                            timestamp={UserImages[i].timestamp}
                            likes={UserImages[i].likes}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;