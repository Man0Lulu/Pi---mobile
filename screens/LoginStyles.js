import styled from "styled-components/native";

export const Logo = styled.Image `
    width: 100px; 
    height: 100px; 
    margin-top: 30px;
`;

export const ContainerLogin = styled.View`
    flex: 1; 
    justifyContent: center; 
    align-items: center;
    background-color: ${props => props.primaryColor};
`;

export const ContainerInput = styled.View `
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const ContainerBotao = styled.View `
    margin-bottom: 40px;
`;

export const ContainerCadastrar = styled.View `
    margin-bottom: -40px;
`;

export const TextTitleLogin = styled.Text `
    color: rgba(255,255,255,0.8);
    font-size: 24; 
    font-weight: bold; 
    align-self: center;
    margin-top: 50px;
    margin-bottom: 40px;
`;

export const TextInputLogin = styled.TextInput `
    width: 280px;
    height: 45px;
    margin: 3px 14px 18px;
    padding: 0 20px;
    background-color: #D3BCC0;
    border-radius: 20px;
`;


export const LinhaHorizontalLogin = styled.View `
    height: 1px;
    background-color: #ccc; 
    width: 90%;
`;

