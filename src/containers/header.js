/* eslint-disable no-shadow */
import React from 'react';
// import {
//   TrashIcon,
// } from '@heroicons/react/solid';
// import { TrashIcon } from '@heroicons/react/outline';
/* eslint-disable no-empty-pattern */
import { Header } from '../components';

export function HeaderContainer({}) {
  return (
    <Header>
      <Header.Title>Choose your Doggo! </Header.Title>
      <Header.Filter>
        <Header.UnDeleted />
        <Header.UnLiked />
      </Header.Filter>
    </Header>
  );
}
