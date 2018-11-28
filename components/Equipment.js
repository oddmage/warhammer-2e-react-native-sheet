import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

import styles from '../styles';

export default class Equipment extends Component<{}> {
  constructor(props) {
    const {eq = {}} = props;
    super(props);
    this.state = {};
    equipmentFields.forEach(field => this.state[field] = eq[field] || null);
  }

  render() {
    const {eq = {}, index, updateEquipment} = this.props;

    const fields = []
    equipmentFields.forEach(field =>
      fields.push(<TextInput style={[styles.inputBox, overrides[field]]}
        placeholder={field}
        key={index}
        value={this.state[field]}
        editable = {true}
        maxLength = {40}
        numberOfLines = {1}
        onChangeText={text=>this.setState({[field]:text})}
        onEndEditing={(e) => updateEquipment({...eq, index, [field]: e.nativeEvent.text})}
      />));

    return (
      <View style={[styles.subContainer]}>
        {
          fields
        }
      </View>
    );
  }
}

const equipmentFields = ['Name', 'Cost', 'Enc', 'D/AP', 'Group', 'Range', 'Reload', 'Qualities'];
const overrides = {
  'Qualities': {minWidth: '100%'}
};