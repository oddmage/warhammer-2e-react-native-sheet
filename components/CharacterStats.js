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
      <View style={[styles.subContainer, {flexDirection: 'column'}]} >
        <View style={styles.subContainer}>
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
        <View style={styles.subContainer}>
          {
            secondaryStats.map(stat =>
              <Stat
                text={stat.stat}
                key={stat.stat}
                value={ stat.value && stat.value(character) || character[stat] || ''}
                onChangeFunction={onStatChange}
                roller={roller}
                readOnly={!!stat.readOnly}
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
  {
    stat: 'A'
  },
  {
    stat: 'W',
  },
  {
    stat: 'SB',
    value: (character) => {
      return Math.floor(Number(character.S || 0)/10) + '';
    },
    readOnly: true
  },
  {
    stat: 'TB',
    value: (character) => {
      return Math.floor(Number(character.T || 0)/10) + ''
    },
    readOnly: true
  },
  {
    stat: 'M'
  },
  {
    stat: 'Mag'
  },
  {
    stat: 'IP'
  },
  {
    stat: 'FP'
  }
];