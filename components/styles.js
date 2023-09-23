import styled from "styled-components/native";

export const BotaoPadrao = styled.TouchableHighlight `
    width: 228px;
    height: 41px;
    border-radius: 20px;
    background-color: #7E4882;
    align-items: center;
    justify-content: center;
`;

export const BotaoPadraoText = styled.Text `
  color: rgba(255,255,255,0.8);
    font-size: 16; 
    font-weight: bold;
`;

const LinhaHorizontalEstilo = styled.View`
  height: 1px;
  background-color: #ccc;
  width: 90%;
  margin: 3px 0px 18px;
`;