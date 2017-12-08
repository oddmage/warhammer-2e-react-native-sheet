import {
  CHANGE_CHARACTER_TAB,
  CLOSE_MODAL,
  ROLLER,
  SET_CURRENT_CHARACTER,
  UPDATE_CHARACTER_INFO
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
  const {type, info, index} = action;

  switch (type) {
    case UPDATE_CHARACTER_INFO:
      const currentCharacter = state.currentCharacter;
      const {field, value} = info;
      return {...state, characters: {...state.characters, [currentCharacter]: {...state.characters[currentCharacter], [field]: value}}};
    case ROLLER: 
      const {text, statValue} = action.rollInfo;
      const roll = Math.floor(Math.random() * 100) + 1;

      const difference = Number(statValue) - roll;
      const message = text + ' rolled a '+ roll + ', ' + (difference >= 0 ? 'Passed' : 'Failed') + ' by ' + Math.floor(Math.abs(difference)/10) + ' degrees';

      return {...state, modalInfo: message};
    case CLOSE_MODAL:
      return {...state, modalInfo: ''};
    case SET_CURRENT_CHARACTER:
      if(index === 'new') {
        return {
          ...state,
          currentCharacter: state.currentIndex,
          characters: {
            ...state.characters,
            [state.currentIndex]: {Name: index}
          },
          currentIndex: state.currentIndex + 1,
          currentTab: 'Info'
        };
      } else {
        return {...state, currentCharacter: index, currentTab: 'Info'};
      }
    case CHANGE_CHARACTER_TAB:
      const {tab} = action;
      console.log({tab});
      return {...state, currentTab: tab}
    default:
      return state;
  }
};

export default reducer;