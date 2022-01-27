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

Cards.ItemPhoto = function CardsItemPhoto({ ...restProps }) {
  return <ItemPhoto {...restProps} />;
};

Cards.ItemTitle = function CardsItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Cards.ItemText = function CardsItemText({ children, ...restProps }) {
  return <ItemText {...restProps}>{children}</ItemText>;
};

Cards.DeleteIcon = function CardsDeleteIcon({ ...restProps }) {
  return <DeleteIcon {...restProps} />;
};

Cards.LikeIcon = function CardsLikeIcon({ ...restProps }) {
  return <LikeIcon {...restProps} />;
};

Cards.UnLikeIcon = function CardsUnLikeIcon({ ...restProps }) {
  return <UnLikeIcon {...restProps} />;
};

Cards.UnDeleteIcon = function CardsUnDeleteIcon({ ...restProps }) {
  return <UnDeleteIcon {...restProps} />;
};
