import React, { Component } from 'react';
import {
  Button,
  ScrollView
} from 'react-native';

import CustomSkill from './CustomSkill';
import Skill from './Skill';
import styles from '../styles';

export default class CharacterSkills extends Component<{}> {
  render() {
    const {character, customSkills={}, updateCustomSkill, deleteCustomSkill, updateCharacterInfo, roller} = this.props;
    const children = [];

    children.push(Object.entries(character.customSkills || {}).map(([index, skill]) => 
      <CustomSkill
        key={skill.name}
        skill={skill}
        index={index}
        onChangeFunction={updateCustomSkill}
        onCustomSkillSwipe={deleteCustomSkill}
        statValue={Number(character[skill.stat]) || 0}
        roller={roller}
      />
    ));

    children.push(basicSkills.map(skill =>
      <Skill
        key={skill.name}
        name={skill.name}
        stat={skill.stat}
        value={character[skill.name] || ''}
        onChangeFunction={updateCharacterInfo}
        statValue={Number(character[skill.stat]) || 0}
        roller={roller}
      />
    ));

    children.push(advancedSkills.map(skill =>
      <Skill
        key={skill.name}
        name={skill.name}
        stat={skill.stat}
        value={character[skill.name] || ''}
        onChangeFunction={updateCharacterInfo}
        statValue={Number(character[skill.stat]) || 0}
        advanced={true}
        roller={roller}
      />
    ));

    children.push(<CustomSkill key={character.customSkillLength} index={'new'} onChangeFunction={updateCustomSkill} value={''} lengthCheck={character.customSkillLength} />);

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {children}
      </ScrollView>
    );
  }
}

const basicSkills = [{
    name: 'Animal Care',
    stat: 'Int'
  },
  {
    name: 'Charm',
    stat: 'Fel'
  },
  {
    name: 'Command',
    stat: 'Fel'
  },
  {
    name: 'Concealment',
    stat: 'Ag'
  },
  {
    name: 'Consume Alcohol',
    stat: 'T'
  },
  {
    name: 'Disguise',
    stat: 'Fel'
  },
  {
    name: 'Drive',
    stat: 'S'
  },
  {
    name: 'Evaluate',
    stat: 'Int'
  },
  {
    name: 'Gamble',
    stat: 'Int'
  },
  {
    name: 'Gossip',
    stat: 'Fel'
  },
  {
    name: 'Haggle',
    stat: 'Fel'
  },
  {
    name: 'Intimidate',
    stat: 'S'
  },
  {
    name: 'Outdoor Survival',
    stat: 'Int'
  },
  {
    name: 'Perception',
    stat: 'Int'
  },
  {
    name: 'Ride',
    stat: 'Ag'
  },
  {
    name: 'Row',
    stat: 'S'
  },
  {
    name: 'Scale SS',
    stat: 'S'
  },
  {
    name: 'Search',
    stat: 'Int'
  }
  ,
  {
    name: 'Silent Move',
    stat: 'Ag'
  }
  ,
  {
    name: 'Swim',
    stat: 'S'
  }
];

const advancedSkills = [{
    name: 'Animal Training',
    stat: 'Fel'
  },
  {
    name: 'Blather',
    stat: 'Fel'
  },
  {
    name: 'Chanelling',
    stat: 'WP'
  },
  {
    name: 'Charm Animal',
    stat: 'Fel'
  },
  {
    name: 'Dodge Blow',
    stat: 'Ag'
  },
  {
    name: 'Follow Trail',
    stat: 'Int'
  },
  {
    name: 'Heal',
    stat: 'Int'
  },
  {
    name: 'Hypnotism',
    stat: 'WP'
  },
  {
    name: 'Lip Reading',
    stat: 'Int'
  },
  {
    name: 'Magical Sense',
    stat: 'WP'
  },
  {
    name: 'Navigation',
    stat: 'Int'
  },
  {
    name: 'Pick Lock',
    stat: 'Ag'
  },
  {
    name: 'Prepare Poison',
    stat: 'Int'
  },
  {
    name: 'Read/Write',
    stat: 'Int'
  },
  {
    name: 'Sail',
    stat: 'Ag'
  },
  {
    name: 'Set Trap',
    stat: 'Ag'
  },
  {
    name: 'Shadowing',
    stat: 'Ag'
  },
  {
    name: 'Sleight of Hand',
    stat: 'Ag'
  }
  ,
  {
    name: 'Torture',
    stat: 'Fel'
  }
  ,
  {
    name: 'Ventriloquism',
    stat: 'Fel'
  }
];