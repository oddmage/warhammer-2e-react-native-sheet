import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MotherModal from 'react-native-modal';

import styles from '../styles';

export default class Modal extends Component {
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButton}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = (content, closeModal) => (
    <View style={styles.modalContent}>
      <Text>{content}</Text>
      {this._renderButton('Close', closeModal)}
    </View>
  );

  render() {
    const {closeModal, content, isVisible} = this.props;

    return (
      <MotherModal isVisible={isVisible}>
        {this._renderModalContent(content, closeModal)}
      </MotherModal>
    );
  }
}