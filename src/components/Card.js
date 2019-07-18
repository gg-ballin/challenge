import React from 'react';

const Card = ({ name, last_name, email, avatar }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='users' src={avatar} />
      <div>
        <h2>{name + ' ' + last_name}</h2>
        <p>{email}</p>
        
      </div>
    </div>
  );
}

export default Card;
