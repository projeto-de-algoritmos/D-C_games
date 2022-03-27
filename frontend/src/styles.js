import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  flex-direction: column;
  width: 75%;


  h1 {
    margin: 0;
    color: white;
  }

  h3 {
    color: white;
  }
`;

export const GamesContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
`;

export const PainelContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
`;

export const Button = styled.button`
  width: 120px;
  background-color: green;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: darkGreen;
  }
`
