import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <Card
              key={i}
              id={users[i].id}
              name={users[i].first_name}
              email={users[i].email}
              avatar={users[i].avatar}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;