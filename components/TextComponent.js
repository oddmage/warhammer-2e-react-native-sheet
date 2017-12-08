import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import styles from '../styles'

export default class TextComponent extends Component<{}> {
  render() {
    const {text, overrides = {}, value = '', onChangeFunction} = this.props;

    return (
      <View style={[styles.textInputView, overrides.textInputView]}>
        <Text style={[styles.inputBoxLabel, overrides.inputBoxLabel]} >{text}</Text>
        <TextInput style={[styles.inputBox, overrides.inputBox]}
          editable = {true}
          maxLength = {40}
          placeholder = {text}
          numberOfLines = {1}
          value = {value}
          onChangeText={(newValue) => onChangeFunction({field: text,value: newValue})}
        />
      </View>
    );
  }
}