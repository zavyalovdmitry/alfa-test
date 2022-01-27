import React from 'react';
import {
  Container,
  Title,
  Filter,
  Liked,
  Deleted,
  UnLiked,
  UnDeleted,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Filter = function HeaderFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
};

Header.Liked = function HeaderLiked({ children, ...restProps }) {
  return <Liked {...restProps}>{children}</Liked>;
};

Header.Deleted = function HeaderLDeleted({ children, ...restProps }) {
  return <Deleted {...restProps}>{children}</Deleted>;
};

Header.UnLiked = function HeaderUnLiked({ children, ...restProps }) {
  return <UnLiked {...restProps}>{children}</UnLiked>;
};

Header.UnDeleted = function HeaderLUnDeleted({ children, ...restProps }) {
  return <UnDeleted {...restProps}>{children}</UnDeleted>;
};
