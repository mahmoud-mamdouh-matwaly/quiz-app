import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  background: rgba(195, 195, 195, 0.25);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 0 30px 30px;
  p {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
  }
  button {
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: 0 1px 5px rgba(255, 255, 255, 1);
    text-transform: capitalize;
    background-color: #2daebf;
    opacity: 1;
    color: #fff;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    margin: 5px 0;
    line-height: 1;
    padding: 8px 14px 9px;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
    outline: none;
    height: 40px;
    width: 100%;
    &:hover {
      color: #2daebf;
      background-color: transparent;
      border: 1px solid #2daebf;
    }
  }
`;
