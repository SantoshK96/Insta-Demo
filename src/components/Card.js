import React from 'react';

const Card = ({ timestamp, Image, id ,likes}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-50 w-25-ns'>
            <img alt='robots' src={Image} />
            <div>
                <div >
                 <h3 className="f4-ns mv0">
                <span>
                    <p className="em em-hearts"></p>
                </span>
                <span>
                    {likes}
                </span>
               </h3>
                </div>
                <h3>{timestamp}</h3>
            </div>
        </div>
    );
}

export default Card;