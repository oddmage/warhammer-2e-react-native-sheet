export const CHANGE_CHARACTER_TAB = 'CHANGE_CHARACTER_TAB';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const ROLLER = 'ROLLER';
export const UPDATE_CHARACTER_INFO = 'UPDATE_CHARACTER_INFO';
export const UPDATE_CUSTOM_SKILL = 'UPDATE_CUSTOM_SKILL';
export const DELETE_CUSTOM_SKILL = 'DELETE_CUSTOM_SKILL';
export const CONFIRM_DELETION = 'CONFIRM_DELETION';
export const DISMISS_ALERT = 'DISMISS_ALERT';

export const setCurrentCharacter = (index) => ({
  type: SET_CURRENT_CHARACTER,
  index
});

export const updateCharacterInfo = (info) => ({
  type: UPDATE_CHARACTER_INFO,
  info
});

export const updateCustomSKill = (info) => ({
  type: UPDATE_CUSTOM_SKILL,
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

export const deleteCustomSkill = (info) => ({
  type: DELETE_CUSTOM_SKILL,
  info
});

export const confirmDeletion = (info) => ({
  type: CONFIRM_DELETION,
  info
});

export const dismissAlert = (info) => ({
  type: DISMISS_ALERT,
  info
});