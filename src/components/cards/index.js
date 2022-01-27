import React from 'react';
import {
  Container,
  Item,
  ItemPhoto,
  ItemTitle,
  ItemText,
  DeleteIcon,
  LikeIcon,
  UnLikeIcon,
  UnDeleteIcon,
} from './styles/cards';

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

Cards.ItemText = function CardsItemText({ children, ...restProps }) {
  return <ItemText {...restProps}>{children}</ItemText>;
};

Cards.DeleteIcon = function CardsDeleteIcon({ children, ...restProps }) {
  return <DeleteIcon {...restProps}>{children}</DeleteIcon>;
};

Cards.LikeIcon = function CardsLikeIcon({ children, ...restProps }) {
  return <LikeIcon {...restProps}>{children}</LikeIcon>;
};

Cards.UnLikeIcon = function CardsUnLikeIcon({ children, ...restProps }) {
  return <UnLikeIcon {...restProps}>{children}</UnLikeIcon>;
};

Cards.UnDeleteIcon = function CardsUnDeleteIcon({ children, ...restProps }) {
  return <UnDeleteIcon {...restProps}>{children}</UnDeleteIcon>;
};
