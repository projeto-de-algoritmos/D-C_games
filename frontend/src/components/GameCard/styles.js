import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
`;

export const Image = styled.img`
  width: 240px;
  height: 330px;
  border-radius: 10px;
  border: 3px solid;
  border-color: ${props => props.selected ? 'cyan' : 'black'};
`;