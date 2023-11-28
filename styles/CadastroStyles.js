import styled from "styled-components/native";

export const Logo = styled.View`
    margin-top: 20%;
    align-Items: center;
`;

export const TextTitleCadastro = styled.Text `
    color: #B52178;
    font-size: 32px; 
    align-self: center;
    margin-top: 30px;
    margin-bottom: -12px;
    font-weight: bold;
`;

export const ContainerCadastro = styled.View `
    flex-direction: columm;
    align-Items: left;
    position: relative;
`;

export const TextInputCadastro = styled.TextInput`
    height: 51px;
    margin: 3px 16px 18px;
    padding: 0px 0px 0px 40px;
    background-color: #FFFF;
    border-radius: 20px;
    align-self: stretch;
`;

export const ContainerIcone = styled.View `
    position: absolute;
    left: 22px;
    top: 20%;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
`;


export const ContainerInput = styled.View`
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const ContainerBotao = styled.View`
    margin-bottom: 30px;
    align-Items: center;
`;

export const TextJaTemConta = styled.Text`
    color: #B52178;
    font-weight: semibold;
    font-size: 16px; 
    margin-top: 5px;
    align-self: center;
`;

export const TextAcessar = styled.Text`
    color: #B52178;
    font-weight: semibold;
    font-size: 16px; 
    margin-top: 5px;
    align-self: center;
    text-decoration: underline;
`;