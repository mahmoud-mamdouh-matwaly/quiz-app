import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  button {
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: 0 1px 5px rgba(255, 255, 255, 1);
    text-transform: capitalize;
    background-color: #2daebf;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    line-height: 1;
    padding: 8px 14px 9px;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
    outline: none;
    &:hover {
      color: #2daebf;
      background-color: transparent;
      border: 1px solid #2daebf;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & div + div {
    margin-inline-start: 15px;
  }
  @media (max-width: 425px) {
    & div:last-child {
      margin-block-start: 15px;
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 14px;
  border-radius: 12px;
  flex-basis: 24%;
  & p {
    text-transform: capitalize;
  }
`;
