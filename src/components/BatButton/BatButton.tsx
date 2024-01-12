import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './Styles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/PasswordService';
import * as Clipboard from 'expo-clipboard';
export function BatButton() {

 const [pass, setPass] = useState('')

 function handleCopyButton(){
      Clipboard.setStringAsync(pass)
 }


 function handleGenerateButton(){
    let genarateToken = generatePass()
    setPass(genarateToken)
 }
  return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable onPress={handleGenerateButton} style={styles.button}>
              <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable onPress={handleCopyButton} style={styles.button}>
              <Text style={styles.text}>COPY</Text>
        </Pressable>
        
    </>
  );
}