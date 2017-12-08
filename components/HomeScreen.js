import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import * as Actions from '../actions'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    const {dispatch} = props;

    this.boundActionCreators = bindActionCreators(Actions, dispatch);
  }

  static navigationOptions = {
    title: 'Pick your character',
  };

  render() {
    const { navigate } = this.props.navigation;
    const {characters = {}} = this.props;

    console.log('In home');

    return (
      <View style={{padding: 5,}}>
        {
          Object.entries(characters).map(([index, character]) => {
            return (<Button
              style={{margin: 5, padding: 5}}
              key={character.Name+index}
              title={character.Name || 'new' + index}
              onPress={() => {
                this.boundActionCreators.setCurrentCharacter(index);
                navigate('CharacterView');
            }} />);
          })
        }
        <Button
          style={{marginTop: 'auto', alignSelf: 'flex-end'}}
          title='New'
          onPress={() => {
            this.boundActionCreators.setCurrentCharacter('new');
            navigate('CharacterView');
        }} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {characters: state.app.characters}
};

export default connect(mapStateToProps)(HomeScreen);