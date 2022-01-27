import styled from 'styled-components/macro';

import { TrashIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as UnHeartIcon } from '@heroicons/react/solid';

export const Container = styled.div`
  max-width: 800px;
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;

  // align-items: center;
  box-sizing: border-box;
`;

export const Item = styled.div`
  width: 30%;
  box-sizing: border-box;
  border: 1px solid black;
  // border-radius: 5px;
  padding: 10px;
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  position: relative;
`;

export const ItemPhoto = styled.img`
  object-fit: cover;
  // width: 100%;
  height: 150px;
`;

export const ItemTitle = styled.h2`
  // padding: 10px;
  margin: 10px 0;
  opacity: 0.85;
  line-height: 1.25;
  font-size: 16px;
  font-weight: 300;
  color: rgb(41, 63, 49);
  // margin: 0;
`;

export const ItemText = styled.p`
  // padding: 10px;
  opacity: 0.65;
  // line-height: 1.25;
  font-size: 12px;
  font-weight: 200;
  color: rgb(41, 63, 49);
  margin: 0;
`;

export const DeleteIcon = styled(TrashIcon)`
  // // padding: 10px;
  // opacity: 0.65;
  // // line-height: 1.25;
  // font-size: 12px;
  // font-weight: 200;
  // color: rgb(41, 63, 49);
  // margin: 0;
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
  // // padding: 10px;
  // opacity: 0.65;
  // // line-height: 1.25;
  // font-size: 12px;
  // font-weight: 200;
  // color: rgb(41, 63, 49);
  // margin: 0;
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
  // // padding: 10px;
  // opacity: 0.65;
  // // line-height: 1.25;
  // font-size: 12px;
  // font-weight: 200;
  // color: rgb(41, 63, 49);
  // margin: 0;
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
