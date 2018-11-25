import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import Equipment from './Equipment';
import styles from '../styles';

export default class CharacterEquipment extends Component<{}> {
  render() {
    const {character, updateEquipment} = this.props;
    const equipment = character.equipment || [];

    const entries = [];
    
    equipment.forEach((eq, index) => 
      entries.push(
        <Equipment
          eq={eq}
          index={index}
          updateEquipment={updateEquipment}
      />)
    );

    entries.push(
      <Equipment
        index={equipment.length}
        updateEquipment={updateEquipment} 
    />);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {
          entries
        }
	    </ScrollView>
    );
  }
}