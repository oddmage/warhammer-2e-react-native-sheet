import React, { Component } from 'react';
import {
  Button,
  Platform,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import Modal from './Modal'

import CharacterInfo from './CharacterInfo';
import CharacterStats from './CharacterStats';
import CharacterButtons from './CharacterButtons';

import styles from '../styles'
import * as Actions from '../actions';

class CharacterView extends Component<{}> {
    constructor(props) {
    super(props);

    const {dispatch} = props;

    this.boundActionCreators = bindActionCreators(Actions, dispatch);
  }

  render() {
    const {character, currentTab, modalInfo} = this.props;

    return (
      <View style={[styles.container, {flexDirection: 'column', justifyContent: 'space-between'}]}>
        <Modal
          isVisible={!!modalInfo}
          closeModal={this.boundActionCreators.closeModal}
          content={modalInfo} />
        {currentTab === 'Info' &&
          <CharacterInfo
            character={character}
            onAttributeChange={this.boundActionCreators.updateCharacterInfo}
          />
        }
        {currentTab === 'Stats' &&
          <CharacterStats
            character={character}
            onStatChange={this.boundActionCreators.updateCharacterInfo}
            roller={this.boundActionCreators.roller}
          />
        }
        <CharacterButtons currentTab={currentTab} changeTab={this.boundActionCreators.changeCharacterTab} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const appState = state.app;
  return {
    character: appState.characters[appState.currentCharacter],
    currentTab: appState.currentTab || 'Info',
    modalInfo: appState.modalInfo
  }
};

export default connect(mapStateToProps)(CharacterView)