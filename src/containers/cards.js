import React from 'react';
import { Cards } from '../components';

export function CardsContainer({ dogsData }) {
  return (
    <Cards>
      {dogsData.dogs
        ? dogsData.dogs.map(
            (item) =>
              item.breeds.length ? (
                <>
                  <img src={item.url} alt="doggo" />
                  <div key={item.id}>{item.breeds[0].name}</div>
                </>
              ) : null
            // console.log(item.breeds)
          )
        : null}
    </Cards>
  );
}
