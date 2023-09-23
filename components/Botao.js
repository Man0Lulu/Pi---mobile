import React from 'react';
import { BotaoPadrao, BotaoPadraoText } from './styles';


const MeuBotao = ({ texto, onPress }) => {
  return (
    <BotaoPadrao onPress={onPress}>
      <BotaoPadraoText>{texto}</BotaoPadraoText>
    </BotaoPadrao>
  );
};
export default MeuBotao;