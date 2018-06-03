import {
  CHANGE_CHARACTER_TAB,
  CLOSE_MODAL,
  CONFIRM_DELETION,
  DELETE_CUSTOM_SKILL,
  DISMISS_ALERT,
  ROLLER,
  SET_CURRENT_CHARACTER,
  UPDATE_CHARACTER_INFO,
  UPDATE_CUSTOM_SKILL
} from '../actions';

const hasCharacterState = {
  characters: {
    0: {
      Name: 'Tester1',
      Race: 'Halfling',
      DOB: 'Stuff'
    }
  },
  currentCharacter: 0,
  currentIndex: 1
};

  const noCharacterState = {
    characters: {},
    currentCharacter: undefined,
    currentIndex: 0
  };

const reducer = (state = noCharacterState, action) => {
  const {type, info={}, index} = action;
  const {field, value, name} = info;
  const currentCharacter = state.currentCharacter;
  var char, newState;

  switch (type) {
    case DISMISS_ALERT:
      const {confirmationInfo, ...newState} = state;
      return newState;
    case CONFIRM_DELETION:
      const {confirmationInfo: confirmInfo, ...deletedState} = state;

      char = state.characters[currentCharacter];
      delete char.customSkills[confirmInfo.index];
      return {
        ...deletedState,
        characters: {
          ...deletedState.characters,
          [currentCharacter]: {
            ...char
          }
        } 
      };
    case UPDATE_CHARACTER_INFO:
      return {...state, characters: {...state.characters, [currentCharacter]: {...state.characters[currentCharacter], [field]: value}}};
    case DELETE_CUSTOM_SKILL:
      const confirmationText = 'Are you sure you want to delete ' + info.skillName + '?';
      return {...state, confirmationInfo: {text: confirmationText, index: info.index, actionName:'confirmDeletion'}};
    case UPDATE_CUSTOM_SKILL:
      char = state.characters[currentCharacter];
      let customSkillLength = char.customSkills && !isNaN(char.customSkillLength) ? char.customSkillLength : 0;
      let skillIndex;
      if( info.index === 'new' ) {
        skillIndex = customSkillLength;
        customSkillLength = customSkillLength + 1;
      } else {
        skillIndex = info.index
      }

      newState = {
        ...state, 
        characters: {
          ...state.characters, 
          [currentCharacter]: {
            ...char,
            customSkillLength,
            customSkills: {
              ...char.customSkills,
              [skillIndex]: {
                ...info,
                index: skillIndex
              }
            }
          }
        }
      };

      return newState;
    case ROLLER:
      const {text, statValue} = action.rollInfo;

      if ( statValue === 0 || Number(statValue) == NaN || Number(statValue) == 0) {
        return {...state, modalInfo: 'Invalid roll'};
      }
      const roll = Math.floor(Math.random() * 100) + 1;

      const difference = Number(statValue) - roll;
      const message = text + ' rolled a '+ roll + ', ' + (difference >= 0 ? 'Passed' : 'Failed') + ' by ' + Math.floor(Math.abs(difference)/10) + ' degrees';

      return {...state, modalInfo: message};
    case CLOSE_MODAL:
      return {...state, modalInfo: ''};
    case SET_CURRENT_CHARACTER:
      if(index === 'new') {
        newState = {
          ...state,
          currentCharacter: state.currentIndex,
          characters: {
            ...state.characters,
            [state.currentIndex]: {}
          },
          currentIndex: state.currentIndex + 1,
          currentTab: 'Info'
        };

        return newState;
      } else {
        return {...state, currentCharacter: index, currentTab: 'Info'};
      }
    case CHANGE_CHARACTER_TAB:
      const {tab} = action;
      return {...state, currentTab: tab}
    default:
      return state;
  }
};

export default reducer;