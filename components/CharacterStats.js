import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import Stat from './Stat';
import styles from '../styles';

export default class CharacterInfo extends Component<{}> {
  render() {
    const {character, onStatChange, roller} = this.props;

    return (
      <View style={[styles.subContainer, {backgroundColor: 'grey', flexDirection: 'column'}]} >
        <View style={[styles.subContainer, {backgroundColor: 'yellow'}]}>
          {
            primaryStats.map(stat =>
              <Stat
                text={stat}
                key={stat}
                value={character[stat] || ''}
                onChangeFunction={onStatChange}
                roller={roller}
              />
            )
          }
        </View>
        <View style={[styles.subContainer, {backgroundColor: 'orange'}]}>
          {
            secondaryStats.map(stat =>
              <Stat
                text={stat}
                key={stat}
                value={character[stat] || ''}
                onChangeFunction={onStatChange}
                roller={roller}
              />
            )
          }
        </View>
      </View>
    );
  }
}

const primaryStats = [
  'WS',
  'BS',
  'S',
  'T',
  'Ag',
  'Int',
  'WP',
  'Fel'
];

const secondaryStats = [
  'A',
  'W',
  'SB',
  'TB',
  'M',
  'Mag',
  'IP',
  'FP'
];