import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

import TextComponent from './TextComponent';
import styles from '../styles';

export default class CharacterTalents extends Component<{}> {
  render() {
    const {character, onTalentChange} = this.props;

    return (
      <View style={styles.subContainer}>
	      <TextInput
          style={{width: '100%'}}
          value={character['talents'] || ''}
          multiline= {true}
          autoGrow= {false}
          onChangeText={(newValue) => onTalentChange({field: 'talents',value: newValue})}
        />
	    </View>
      );
  }
}