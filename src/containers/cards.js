/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React from 'react';
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
    arr[+i] = !showCard[i];
    setShowCard(arr);
  };

  const likeCard = (e, i) => {
    const arr = Object.assign([], showLike);
    arr[+i] = !showLike[i];
    setShowLike(arr);
  };

  return (
    <Cards>
      {dogsData.dogs
        ? dogsData.dogs.map((item, i) =>
            item.breeds.length && (showCard[i] || showDeleted) ? (
              showLiked ? (
                showLike[i] ? (
                  <Cards.Item
                    key={item.id}
                    className={showCard[i] ? 'active' : 'inactive'}
                  >
                    {showCard[i] ? (
                      <Cards.DeleteIcon onClick={(e) => deleteCard(e, i)} />
                    ) : (
                      <Cards.UnDeleteIcon onClick={(e) => deleteCard(e, i)} />
                    )}
                    {showLike[i] ? (
                      <Cards.UnLikeIcon onClick={(e) => likeCard(e, i)} />
                    ) : (
                      <Cards.LikeIcon onClick={(e) => likeCard(e, i)} />
                    )}
                    <Cards.ItemPhoto src={item.url} alt="doggo" />{' '}
                    <Cards.ItemTitle>{item.breeds[0].name}</Cards.ItemTitle>
                    <Cards.ItemText>
                      {item.breeds[0].temperament}
                    </Cards.ItemText>
                  </Cards.Item>
                ) : null
              ) : (
                <Cards.Item
                  key={item.id}
                  className={showCard[i] ? 'active' : 'inactive'}
                >
                  {showCard[i] ? (
                    <Cards.DeleteIcon onClick={(e) => deleteCard(e, i)} />
                  ) : (
                    <Cards.UnDeleteIcon onClick={(e) => deleteCard(e, i)} />
                  )}
                  {showLike[i] ? (
                    <Cards.UnLikeIcon onClick={(e) => likeCard(e, i)} />
                  ) : (
                    <Cards.LikeIcon onClick={(e) => likeCard(e, i)} />
                  )}
                  <Cards.ItemPhoto src={item.url} alt="doggo" />{' '}
                  <Cards.ItemTitle>{item.breeds[0].name}</Cards.ItemTitle>
                  <Cards.ItemText>{item.breeds[0].temperament}</Cards.ItemText>
                </Cards.Item>
              )
            ) : null
          )
        : null}
    </Cards>
  );
}
