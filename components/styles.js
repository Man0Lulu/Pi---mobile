import styled from "styled-components/native";

export const BotaoPadrao = styled.TouchableHighlight `
    width: 325px;
    height: 52px;
    border-radius: 20px;
    background-color: #B52178;
    align-items: center;
    justify-content: center;
`;

export const BotaoPadraoText = styled.Text `
  color: #FFF;
    font-size: 16px; 
    font-weight: bold;
`;

const LinhaHorizontalEstilo = styled.View`
  height: 1px;
  background-color: #B52178;
  width: 90%;
  margin: 3px 0px 18px;
`;