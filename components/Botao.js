import React, { useState } from 'react';
import { BotaoPadrao, BotaoPadraoText } from './BotaoStyles';


const Botao = ({ texto, onPress }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handlePress = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      onPress();
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 4000);
    }
  };

  return (
    <BotaoPadrao onPress={handlePress} disabled={isButtonDisabled}>
      <BotaoPadraoText>{texto}</BotaoPadraoText>
    </BotaoPadrao>
  );
};
export default Botao;