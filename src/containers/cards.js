/* eslint-disable no-shadow */
import React from 'react';
// import {
//   TrashIcon,
// } from '@heroicons/react/solid';
// import { TrashIcon } from '@heroicons/react/outline';
import { Cards } from '../components';

export function CardsContainer({
  dogsData,
  showLike,
  setShowLike,
  showCard,
  setShowCard,
  showDeleted,
  showLiked,
}) {
  const deleteCard = (e, i) => {
    const arr = Object.assign([], showCard);
    arr[+i] = false;
    setShowCard(arr);
    // localStorage.setItem('likes', arr);
    // console.log(+i);
  };

  const likeCard = (e, i) => {
    const arr = Object.assign([], showLike);
    arr[+i] = !showLike[i];
    setShowLike(arr);
    // localStorage.setItem('cards', arr);
    // console.log(+i);
  };

  return (
    <Cards>
      {dogsData.dogs
        ? dogsData.dogs.map(
            (item, i) =>
              item.breeds.length && showCard[i] ? (
                <Cards.Item key={item.id}>
                  <Cards.DeleteIcon
                    // data-index={i}
                    onClick={(e) => deleteCard(e, i)}
                  />
                  {showLike[i] ? (
                    <Cards.UnLikeIcon
                      // data-index={i}
                      onClick={(e) => likeCard(e, i)}
                    />
                  ) : (
                    <Cards.LikeIcon
                      // data-index={i}
                      onClick={(e) => likeCard(e, i)}
                    />
                  )}
                  <Cards.ItemPhoto src={item.url} alt="doggo" />{' '}
                  <Cards.ItemTitle>{item.breeds[0].name}</Cards.ItemTitle>
                  <Cards.ItemText>{item.breeds[0].temperament}</Cards.ItemText>
                </Cards.Item>
              ) : null
            // console.log(item.breeds)
          )
        : null}
    </Cards>
  );
}
