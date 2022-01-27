import styled from 'styled-components/macro';

import { TrashIcon, HeartIcon } from '@heroicons/react/outline';
import {
  HeartIcon as UnHeartIcon,
  TrashIcon as UnTrashIcon,
} from '@heroicons/react/solid';

export const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  box-sizing: border-box;
  opacity: 0.85;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnLiked = styled(HeartIcon)`
  height: 30px;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const UnDeleted = styled(TrashIcon)`
  height: 30px;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const Liked = styled(UnHeartIcon)`
  height: 30px;
  cursor: pointer;
  cursor: pointer;
`;

export const Deleted = styled(UnTrashIcon)`
  height: 30px;
  cursor: pointer;
  cursor: pointer;
`;

export const Text = styled.p`
  margin-right: 10px;

  &:nth-of-type(2n) {
    margin-left: 50px;
  }
`;
