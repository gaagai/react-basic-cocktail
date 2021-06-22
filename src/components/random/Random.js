import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const getRandom = () => {
      axios
        .get('https://thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
          setRandom(response.data);
        })
        .catch((error) => {
          console.error('Error', error);
        });
    };

    getRandom();
  }, []);
  return (
    <div>
      {random && (
        <div className='random-drink'>
          <h2>Random DRINK:</h2>
          <h3>{random.drinks[0].strDrink}</h3>
          <img
            src={random.drinks[0].strDrinkThumb}
            alt={random.drinks[0].strDrink}
          />
        </div>
      )}
    </div>
  );
};

export default Random;
