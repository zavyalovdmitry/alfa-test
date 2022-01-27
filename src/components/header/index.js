import React from 'react';
import {
  Container,
  Title,
  Filter,
  Liked,
  Deleted,
  UnLiked,
  UnDeleted,
  Text,
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

Header.Liked = function HeaderLiked({ ...restProps }) {
  return <Liked {...restProps} />;
};

Header.Deleted = function HeaderLDeleted({ ...restProps }) {
  return <Deleted {...restProps} />;
};

Header.UnLiked = function HeaderUnLiked({ ...restProps }) {
  return <UnLiked {...restProps} />;
};

Header.UnDeleted = function HeaderLUnDeleted({ ...restProps }) {
  return <UnDeleted {...restProps} />;
};

Header.Text = function HeaderLText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
