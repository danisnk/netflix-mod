import styled from "styled-components/macro";

//Contianer, Row, Column, Title, Text, Language, Break, Link
export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 40px;
  padding-top: 15px;
  margin-bottom: -60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;

export const Language = styled.div`
  border: 1px solid #75757575;
  width: 135px;
  height: 45px;
  border-radius: 3px;
  background-color: black;
  padding: 5px 15px 0px;
`;

export const Select = styled.select`
  border: none;
  background: black;
  outline: none;
  color: #757575;
  width: 120px;
  height: 35px;
  appearance: none;
  color: #757575;
  font-size: 20px;

  option {
    color: white;
    background: black;
    display: flex;
    padding: 10px;
  }
`;
