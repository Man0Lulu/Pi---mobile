import styled from "styled-components/native"

export const ContainerCriarHabito = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextTitulo = styled.Text`
    color: #B52178;
    font-size: 25px;
    font-family: Inter-Black;
    align-self: center;
    margin-top: 15px;
`;

export const TextTocarHabito = styled.Text`
    color: #808191;
    font-size: 16px;
    font-family: Inter-SemiBold;
    margin-left: 30px;
    margin-top: 15px;
`;

export const TextImagemHabito = styled.Text`
    color: #B52178;
    font-size: 15px;
    font-family: Inter-Black;
    margin-left: 16px;
    margin-top: 20px;
    margin-right: 35px;
    margin-left: 35px;
    margin-bottom: 3px;
`;

export const ContainerHabito = styled.View`
    flex-direction: columm;
    align-Items: left;
    position: relative;
    margin-top: -20px;
`;

export const TextInputHabito = styled.TextInput` 
    height: 51px;
    margin: 3px 16px 6px;
    padding: 0px 0px 0px 20px;
    background-color: #FFFF;
    border-radius: 20px;
    align-self: stretch

`;

export const ContainerPosicaoDefaultImagem = styled.View`
    position: absolute;
    margin-left: 70px;
    padding-top: 38px;
    
`;
export const ContainerDefaultHabitoImage = styled.View`
    height: 100px;
    width: 120px;
    margin-left: 30px;
    margin-top: 10px;
    border-radius: 20px;
    background: #B52178;
    opacity: 0.4;
`;

export const ContainerBotao = styled.View`
    margin-top: 36px;
    margin-bottom: 50px;
    align-Items: center;
    
`;

export const ContainerAlarme = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 16px;
    margin-top: 8px;
`;