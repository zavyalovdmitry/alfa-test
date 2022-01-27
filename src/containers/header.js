/* eslint-disable no-shadow */
import React, { useState } from 'react';
// import {
//   TrashIcon,
// } from '@heroicons/react/solid';
// import { TrashIcon } from '@heroicons/react/outline';
/* eslint-disable no-empty-pattern */
import { Header } from '../components';

export function HeaderContainer({
  showDeleted,
  setShowDeleted,
  showLiked,
  setShowLiked,
}) {
  const toggleShowDeleted = () => {
    setShowDeleted(!showDeleted);
    // console.log(showDeleted);
  };

  const toggleShowLiked = () => {
    setShowLiked(!showLiked);
  };

  return (
    <Header>
      <Header.Title>Choose your Doggo! </Header.Title>
      <Header.Filter>
        {/* Filter by */}
        {/* {showDeleted ? (
          <Header.Deleted onClick={() => toggleShowDeleted()} />
        ) : (
          <Header.UnDeleted onClick={() => toggleShowDeleted()} />
        )} */}
        {showLiked ? (
          <Header.Liked onClick={() => toggleShowLiked()} />
        ) : (
          <Header.UnLiked onClick={() => toggleShowLiked()} />
        )}
      </Header.Filter>
    </Header>
  );
}
