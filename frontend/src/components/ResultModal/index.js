import React from 'react';
import { Body, Container, Footer, ModalBackground, TitleCloseBtn } from './styles';

import * as S from '../GameCard/styles'

const ReasultModal = ({ visible, setVisible, image, description}) => {
  const mystyle = {
    display: "flex",
    flexDirection: "column",
  };

  return(
    <ModalBackground>
      <Container>
        <TitleCloseBtn>
        <button
            onClick={() => {
              setVisible(false);
            }}
          >
            X
          </button>
        </TitleCloseBtn>
        <h1>Recomendação de jogo:</h1>
        <Body>
          <div style={{mystyle}}>
            <S.Image style={{marginTop: "450px"}} src={image}/>
            <p>{description}</p>
          </div>
        </Body>
        <Footer>
        <button
            onClick={() => {
              setVisible(false);
            }}
            id="cancelBtn"
          >
            Fechar
          </button>
        </Footer>
      </Container>
    </ModalBackground>
  );
}
export default ReasultModal;