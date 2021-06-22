import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='list-item'>
      <div>{item.strDrink}</div>
      <div>
        <img
          style={{ height: '50px', width: '50px' }}
          src={item.strDrinkThumb}
          alt={item.strDrink}
        />
      </div>
    </div>
  );
};

export default Item;
