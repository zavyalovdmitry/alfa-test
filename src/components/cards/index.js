import React from 'react';
import { Container, Item, ItemPhoto, ItemTitle } from './styles/cards';

export default function Cards({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Cards.Item = function CardsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Cards.ItemPhoto = function CardsItemPhoto({ children, ...restProps }) {
  return <ItemPhoto {...restProps}>{children}</ItemPhoto>;
};

Cards.ItemTitle = function CardsItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};
