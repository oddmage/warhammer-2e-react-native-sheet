import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import Modal from './Modal'

import CharacterInfo from './CharacterInfo';
import CharacterStats from './CharacterStats';
import CharacterButtons from './CharacterButtons';
import CharacterSkills from './CharacterSkills';
import CharacterTalents from './CharacterTalents';

import styles from '../styles'
import * as Actions from '../actions';

class CharacterView extends Component<{}> {
    constructor(props) {
    super(props);

    const {dispatch} = props;

    if (props.character && (props.navigation.state.params && props.navigation.state.params.characterName) !== props.character.Name) {
        props.navigation.setParams({ characterName: props.character.Name });
    }

    this.boundActionCreators = bindActionCreators(Actions, dispatch);
  }

  static navigationOptions = ({navigation}) => {
    const title = navigation.state.params && navigation.state.params.characterName || 'Character Info';
    return {
      title
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.character && (this.props.navigation.state.params && this.props.navigation.state.params.characterName) !== nextProps.character.Name) {
        this.props.navigation.setParams({ characterName: nextProps.character.Name });
    }
  }

  render() {
    const {character, currentTab, modalInfo, confirmationInfo} = this.props;

    if (confirmationInfo) {
      Alert.alert(
        'Confirm',
        confirmationInfo.text,
        [
          {text: 'Cancel', onPress: () => this.boundActionCreators['closeModal']},
          {text: 'OK', onPress: () => this.boundActionCreators[confirmationInfo.actionName](confirmationInfo)},
        ],
        { cancelable: false }
      );
    }

    return (
      <View style={[styles.container, {flexDirection: 'column', flexWrap: 'nowrap'}]}>
        <Modal
          isVisible={!!modalInfo}
          closeModal={this.boundActionCreators.closeModal}
          content={modalInfo} />
        <ScrollView style={[styles.container, {}]}>
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
          {currentTab === 'Skills' &&
            <CharacterSkills
              character={character}
              onSkillChange={this.boundActionCreators.updateCharacterInfo}
              onCustomSkillSwipe={this.boundActionCreators.deleteCustomSkill}
              roller={this.boundActionCreators.roller}
              onCustomSkillChange={this.boundActionCreators.updateCustomSKill}
            />
          }
          {currentTab === 'Talents' &&
            <CharacterTalents
              character={character}
              onTalentChange={this.boundActionCreators.updateCharacterInfo}
            />
          }
        </ScrollView>
        <CharacterButtons currentTab={currentTab} changeTab={this.boundActionCreators.changeCharacterTab} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const appState = state.app;
  return {
    character: appState.characters[appState.currentCharacter] || {},
    currentTab: appState.currentTab || 'Info',
    modalInfo: appState.modalInfo,
    confirmationInfo: appState.confirmationInfo || false
  }
};

export default connect(mapStateToProps)(CharacterView)