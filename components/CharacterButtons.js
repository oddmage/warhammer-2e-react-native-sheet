import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

import styles from '../styles';

export default class CharacterInfo extends Component<{}> {
  render() {
    const {changeTab, currentTab} = this.props;

    const visibleTabs = tabs.filter(tab => tab !== currentTab);

    return (
      <View style={[styles.subContainer, {minHeight: 30, minWidth: '100%', alignSelf: 'flex-end'}]}>
        {
          visibleTabs.map(tab =>
            <View style={{flex:1, padding: 1}} key={tab}>
              <Button
                title={tab}
                onPress={() => {changeTab(tab)}} />
            </View>
          )
        }
      </View>
    );
  }
}

const tabs = [
  'Info',
  'Stats',
  'Skills',
  'Talents'
];