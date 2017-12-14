import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {Select, ListRow} from 'teaset';

import styles from '../styles';

export default class Skill extends Component<{}> {
  render() {
    const {name, stat, statValue, value='', onChangeFunction, roller, advanced=false} = this.props;

    let rollValue;

    if(value === '') {
      rollValue = advanced ? 0 : Math.ceil(statValue/2);
    } else if (value ==='+10') {
      rollValue = Number(statValue) + 10;
    } else if (value==='+20') {
      rollValue = Number(statValue) + 20;
    }

    const text = `${name} (${stat}, ${value||'Untrained'} = ${rollValue})`;

    return (
      <View style={[styles.subContainer, {padding: 2}]}>
        <Text style={[styles.inputBoxLabel, {width: '40%'}]}
          onPress={()=> roller({text, statValue: rollValue})}>
          {name}
        </Text>
        <Text style={[styles.inputBoxLabel, {color: 'white', backgroundColor: 'black', width: '15%'}]}
          onPress={()=> roller({text, statValue: rollValue})}>
          {stat}
        </Text>
        <View style={{width: '40%'}}>
          <Select
            items={values}
            placeholder='Untrained'
            pickerType='popover'
            value={value}
            style={{margin: 2}}
            onSelected={(newValue) => onChangeFunction({field: name, value: newValue})}
          />
        </View>
      </View>
    );
  }
}

const values = [
  'Trained',
  '+10',
  '+20'
];