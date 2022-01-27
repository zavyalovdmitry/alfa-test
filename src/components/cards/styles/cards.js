import styled from 'styled-components/macro';

import { TrashIcon, HeartIcon } from '@heroicons/react/outline';
import {
  HeartIcon as UnHeartIcon,
  TrashIcon as UnTrashIcon,
} from '@heroicons/react/solid';

export const Container = styled.div`
  width: 800px;
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

export const Item = styled.div`
  width: 30%;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;

  &.inactive {
    opacity: 0.5;
  }
`;

export const ItemPhoto = styled.img`
  object-fit: cover;
  height: 150px;
`;

export const ItemTitle = styled.h2`
  margin: 10px 0;
  opacity: 0.85;
  line-height: 1.25;
  font-size: 16px;
  font-weight: 300;
  color: rgb(41, 63, 49);
`;

export const ItemText = styled.p`
  opacity: 0.65;
  font-size: 12px;
  font-weight: 200;
  color: rgb(41, 63, 49);
  margin: 0;
`;

export const DeleteIcon = styled(TrashIcon)`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  background: #f2f2f2;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const LikeIcon = styled(HeartIcon)`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  background: #f2f2f2;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const UnLikeIcon = styled(UnHeartIcon)`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  background: #f2f2f2;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const UnDeleteIcon = styled(UnTrashIcon)`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  background: #f2f2f2;
  cursor: pointer;

  & path {
    opacity: 0.5;
  }

  &:hover path {
    opacity: 1;
    transition: 0.5s;
  }
`;
