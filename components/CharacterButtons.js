import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import styles from '../styles';

export default class CharacterInfo extends Component<{}> {
  render() {
    const {changeTab, character, currentTab} = this.props;

    const visibleTabs = tabs.filter(tab => tab !== currentTab);

    return (
      <View style={[styles.container, {maxHeight: 35, minWidth: '100%', backgroundColor: 'pink', flex: 1}]}>
        {
          visibleTabs.map(tab =>
            <View style={{flex:1}} key={tab}>
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