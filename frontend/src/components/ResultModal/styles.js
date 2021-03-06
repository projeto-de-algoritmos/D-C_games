import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 21, 49, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40%;
  height: 60%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  
  h1 {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  text-align: center;
  overflow: auto;

  p {
    height: 300px;
  }
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: crimson;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;
