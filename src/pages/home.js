/* eslint-disable no-shadow */
/* eslint-disable prefer-spread */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CardsContainer } from '../containers/cards';
import { HeaderContainer } from '../containers/header';
import { fetchDogs } from '../redux';

function Home({ dogsData, fetchDogs }) {
  const [showLike, setShowLike] = useState();
  const [showCard, setShowCard] = useState();

  const [showDeleted, setShowDeleted] = useState(false);
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    showLike ? localStorage.setItem('likes', JSON.stringify(showLike)) : null;
    showCard ? localStorage.setItem('cards', JSON.stringify(showCard)) : null;
  }, [showLike, showCard]);

  useEffect(() => {
    fetchDogs();
    !localStorage.getItem('cards')
      ? localStorage.setItem('cards', 'undefined')
      : null;
    !localStorage.getItem('likes')
      ? localStorage.setItem('likes', 'undefined')
      : null;
  }, []);

  useEffect(() => {
    if (!dogsData.loading) {
      localStorage.getItem('cards') === 'undefined' ||
      JSON.parse(localStorage.getItem('cards')).length === 0
        ? setShowCard(
            Array.apply(null, Array(dogsData.dogs.length)).map(() => true)
          )
        : setShowCard(JSON.parse(localStorage.getItem('cards')));
      localStorage.getItem('likes') === 'undefined' ||
      JSON.parse(localStorage.getItem('likes')).length === 0
        ? setShowLike(
            Array.apply(null, Array(dogsData.dogs.length)).map(() => false)
          )
        : setShowLike(JSON.parse(localStorage.getItem('likes')));
    }
  }, [dogsData.loading]);

  return dogsData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <HeaderContainer
        showDeleted={showDeleted}
        setShowDeleted={setShowDeleted}
        showLiked={showLiked}
        setShowLiked={setShowLiked}
      />
      <CardsContainer
        dogsData={dogsData}
        showLike={showLike}
        showCard={showCard}
        setShowCard={setShowCard}
        setShowLike={setShowLike}
        showDeleted={showDeleted}
        showLiked={showLiked}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  dogsData: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDogs: () => dispatch(fetchDogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
