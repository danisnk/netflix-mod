import styled from "styled-components/macro";

// Container, Input, Button, Text

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 450;
  width: 62%;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  outline: none;
  border-radius: 4px;

  -webkit-transition: 0.2s;
  transition: 0.2s;

  &:focus {
    border: 1px solid #4293f5;
  }

  @media (max-width: 1000px) {
    height: 65px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  border: 0;
  padding: 0 32px;
  font-size: 26px;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 45px;
    font-size: 16px;
    margin-top: 20px;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
