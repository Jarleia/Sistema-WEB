// App.js
import React from 'react';
import { View } from 'react-native';
import ColorButton from './ColorButton';
import ColorText from './ColorText';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ColorText />
      <ColorButton />
    </View>
  );
}
