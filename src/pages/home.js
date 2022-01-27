/* eslint-disable no-shadow */
/* eslint-disable prefer-spread */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CardsContainer } from '../containers/cards';
// import { connect } from 'react-redux';
import { HeaderContainer } from '../containers/header';
import { fetchDogs } from '../redux';

function Home({ dogsData, fetchDogs }) {
  const [showLike, setShowLike] = useState();
  const [showCard, setShowCard] = useState();

  useEffect(() => {
    fetchDogs();
  }, []);

  useEffect(() => {
    if (!dogsData.loading) {
      // !localStorage.getItem('cards')
      //   ?
      setShowCard(
        Array.apply(null, Array(dogsData.dogs.length)).map(() => true)
      );
      //   : null;
      // !localStorage.getItem('likes')
      //   ?
      setShowLike(
        Array.apply(null, Array(dogsData.dogs.length)).map(() => false)
      );
      // : null;
    }
    // console.log(showCard);
  }, [dogsData.loading]);

  // useEffect(() => {
  //   console.log(dogsData);
  // }, [dogsData]);

  // dogsData ? console.log(dogsData) : null;
  return dogsData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <HeaderContainer />
      <CardsContainer
        dogsData={dogsData}
        showLike={showLike}
        showCard={showCard}
        setShowCard={setShowCard}
        setShowLike={setShowLike}
      />
    </>
  );
  // return <h2>Loading...</h2>;
}

const mapStateToProps = (state) => ({
  dogsData: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDogs: () => dispatch(fetchDogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
