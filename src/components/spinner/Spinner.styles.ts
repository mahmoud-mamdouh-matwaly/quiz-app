import styled, { keyframes } from 'styled-components';

export const SpinnerItem = styled.div`
  position: absolute;
  top: 38%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #2daebf;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;
const itemOne = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const itemTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;
const itemThree = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 38px;
  left: 45%;
  ${SpinnerItem}:nth-of-type(1) {
    left: 6px;
    animation: ${itemOne} 0.6s infinite;
  }
  ${SpinnerItem}:nth-of-type(2) {
    left: 6px;
    animation: ${itemTwo} 0.6s infinite;
  }
  ${SpinnerItem}:nth-of-type(3) {
    left: 26px;
    animation: ${itemTwo} 0.6s infinite;
  }
  ${SpinnerItem}:nth-of-type(4) {
    left: 45px;
    animation: ${itemThree} 0.6s infinite;
  }
`;
