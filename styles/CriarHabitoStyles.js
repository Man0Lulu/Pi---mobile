import styled from "styled-components/native"

export const ContainerCriarHabito = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextTitulo = styled.Text`
    color: #B52178;
    font-size: 30px;
    font-family: Inter-SemiBold;
    align-self: center;
    margin-top: 20px;
`;

export const TextTocarHabito = styled.Text`
    color: #808191;
    font-size: 20px;
    font-family: Inter-SemiBold;
    margin-left: 16px;
    margin-top: 20px
`;

export const TextImagemHabito = styled.Text`
    color: #B52178;
    font-size: 20px;
    font-family: Inter-SemiBold;
    margin-left: 16px;
    margin-top: 20px
`;

export const TextAlarme = styled.Text`
    color: #B52178;
    font-size: 20px;
    font-family: Inter-SemiBold;
    margin-left: 16px;
    margin-top: 20px
`;

export const ContainerHabito = styled.View`
    flex-direction: columm;
    align-Items: left;
    position: relative;
`;

export const TextInputHabito = styled.TextInput` 
    height: 51px;
    margin: 1px 14px 1px;
    padding: 0px 0px 0px 20px;
    background-color: #FFFF;
    border-radius: 20px;
    align-self: stretch;   
`;

export const ContainerBotao = styled.View`
    margin-bottom: 50px;
    align-Items: center;
    margin: 25px 14px 1px;
`;

export const ContainerAlarme = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 16px;
`;