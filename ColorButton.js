// ColorButton.js
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { toggleColor } from './colorObservable';

export default function ColorButton() {
  const [current, setCurrent] = useState('black');

  function handlePress() {
    const newColor = current === 'black' ? 'red' : 'black';
    setCurrent(newColor);
    toggleColor(); // dispara no observable
  }

  return (
    <View style={{ margin: 20 }}>
      <Button title="Alterar Cor" onPress={handlePress} />
    </View>
  );
}
