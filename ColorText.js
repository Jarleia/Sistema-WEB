// ColorText.js
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { colorSubject } from './colorObservable';

export default function ColorText() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const subscription = colorSubject.subscribe(value => {
      setColor(value);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Text style={{ fontSize: 32, color, textAlign: 'center', marginTop: 20 }}>
      Texto colorido!
    </Text>
  );
}
