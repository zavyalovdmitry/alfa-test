/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Header } from '../components';

export function HeaderContainer({
  showDeleted,
  setShowDeleted,
  showLiked,
  setShowLiked,
}) {
  const toggleShowDeleted = () => {
    setShowDeleted(!showDeleted);
  };

  const toggleShowLiked = () => {
    setShowLiked(!showLiked);
  };

  return (
    <Header>
      <Header.Title>Choose your Doggo! </Header.Title>
      <Header.Filter>
        <Header.Text>Filter by</Header.Text>
        {showLiked ? (
          <Header.Liked onClick={() => toggleShowLiked()} />
        ) : (
          <Header.UnLiked onClick={() => toggleShowLiked()} />
        )}
        <Header.Text>Show deleted</Header.Text>
        {showDeleted ? (
          <Header.Deleted onClick={() => toggleShowDeleted()} />
        ) : (
          <Header.UnDeleted onClick={() => toggleShowDeleted()} />
        )}
      </Header.Filter>
    </Header>
  );
}
