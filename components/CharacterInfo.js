import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import TextComponent from './TextComponent';
import styles from '../styles';

export default class CharacterInfo extends Component<{}> {
  render() {
    const {character, onAttributeChange} = this.props;

    return (
      <View style={styles.subContainer}>
	    {
	      characterInfoFields.map(field =>
	        <TextComponent
            style={{height: 60}}
	          text={field.attribute}
	          key={field.attribute}
	          value={character[field.attribute] || ''}
	          overrides={field.overrides || {}}
	          onChangeFunction={onAttributeChange}
	        />
	      )
	    }
	  </View>
      );
  }
}

const characterInfoFields = [
  {
    attribute: 'Name'
  },
  {
    attribute: 'Race'
  },
  {
    attribute: 'Current Career'
  },
  {
    attribute: 'XP'
  },
  {
    attribute: 'Previous Careers',
    overrides: {
      textInputView:{minWidth: '100%'}
    }
  },
  {
    attribute: 'Gender'
  },
  {
    attribute: 'Age'
  },
  {
    attribute: 'DOB'
  },
  {
    attribute: 'Birthplace'
  },
  {
    attribute: 'Nationality'
  },
  {
    attribute: 'Religion'
  },
  {
    attribute: 'Height'
  },
  {
    attribute: 'Weight'
  },
  {
    attribute: 'Eyes'
  },
  {
    attribute: 'Hair'
  },
  {
    attribute: 'Distinguishing Marks',
    overrides: {
      textInputView:{minWidth: '100%'}
    }
  }
];