/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CardsContainer } from '../containers/cards';
import { fetchDogs } from '../redux';

function Home({ dogsData, fetchDogs }) {
  useEffect(() => {
    fetchDogs();
  }, []);

  // useEffect(() => {
  //   console.log(dogsData);
  // }, [dogsData]);

  // dogsData ? console.log(dogsData) : null;
  return dogsData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <CardsContainer dogsData={dogsData} />
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
