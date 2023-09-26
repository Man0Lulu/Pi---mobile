import React from 'react';
import { BotaoPadrao, BotaoPadraoText } from './BotaoStyles';


const Botao = ({ texto, onPress }) => {
  return (
    <BotaoPadrao onPress={onPress}>
      <BotaoPadraoText>{texto}</BotaoPadraoText>
    </BotaoPadrao>
  );
};
export default Botao;