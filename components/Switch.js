import React from 'react';
import { Switch } from 'react-native-paper';

const BotaoAlarme = ({ value, onValueChange }) => {
  return <Switch value={value} onValueChange={onValueChange} />;
};

export default BotaoAlarme;
