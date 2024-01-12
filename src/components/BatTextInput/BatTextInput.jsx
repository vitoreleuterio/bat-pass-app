import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './Styles';

interface BatTextInputProps{
    pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput placeholder='Pass' style={styles.inputer} value={props.pass}/>
  );
}