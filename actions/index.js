export const CHANGE_CHARACTER_TAB = 'CHANGE_CHARACTER_TAB';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const ROLLER = 'ROLLER';
export const UPDATE_CHARACTER_INFO = 'UPDATE_CHARACTER_INFO';

export const setCurrentCharacter = (index) => ({
  type: SET_CURRENT_CHARACTER,
  index
});

export const updateCharacterInfo = (info) => ({
  type: UPDATE_CHARACTER_INFO,
  info
});

export const changeCharacterTab = (tab) => ({
  type: CHANGE_CHARACTER_TAB,
  tab
});

export const roller = (rollInfo) => ({
  type: ROLLER,
  rollInfo
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});