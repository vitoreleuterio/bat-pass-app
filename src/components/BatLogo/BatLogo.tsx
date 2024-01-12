import React from 'react';
import {Text, Image } from 'react-native';

import { styles } from './Styles';
import BatLogoImage from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
          BAT PASS GENERATOR
        </Text>
        <Image source={BatLogoImage} style={{resizeMode: 'contain', height: 180}}/>
    </>
  );
}