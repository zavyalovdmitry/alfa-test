import styled from 'styled-components/macro';

import { TrashIcon, HeartIcon } from '@heroicons/react/outline';
import {
  HeartIcon as UnHeartIcon,
  TrashIcon as UnTrashIcon,
} from '@heroicons/react/solid';

export const Container = styled.div`
  max-width: 800px;
  display: flex;
  // padding: 50px;
  flex-wrap: wrap;
  justify-content: center;

  // align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  // width: 30%;
  box-sizing: border-box;
  // border: 1px solid black;
  // border-radius: 5px;
  // padding: 10px;
  // margin: 1%;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  // border-radius: 5px;
  // border: 1px solid rgba(0, 0, 0, 0.08);

  // position: relative;
  opacity: 0.85;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
