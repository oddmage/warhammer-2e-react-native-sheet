export const CHANGE_CHARACTER_TAB = 'CHANGE_CHARACTER_TAB';
export const CHANGE_TAB_ORDER = 'CHANGE_TAB_ORDER';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const ROLLER = 'ROLLER';
export const UPDATE_CHARACTER_INFO = 'UPDATE_CHARACTER_INFO';
export const UPDATE_CUSTOM_SKILL = 'UPDATE_CUSTOM_SKILL';
export const DELETE_CUSTOM_SKILL = 'DELETE_CUSTOM_SKILL';
export const CONFIRM_DELETION = 'CONFIRM_DELETION';
export const DISMISS_ALERT = 'DISMISS_ALERT';
export const SORT_TABS = 'SORT_TABS';
export const UPDATE_EQUIPMENT = 'UPDATE_EQUIPMENT';
export const UPDATE_SPELL = 'UPDATE_SPELL';

export const setCurrentCharacter = (index) => ({
  type: SET_CURRENT_CHARACTER,
  index
});

export const updateCharacterInfo = (info) => ({
  type: UPDATE_CHARACTER_INFO,
  info
});

export const updateCustomSkill = (info) => ({
  type: UPDATE_CUSTOM_SKILL,
  info
});

export const updateEquipment = (info) => ({
  type: UPDATE_EQUIPMENT,
  info
});

export const updateSpell = (info) => ({
  type: UPDATE_SPELL,
  info
});

export const changeCharacterTab = (tab) => ({
  type: CHANGE_CHARACTER_TAB,
  tab
});

export const changeTabOrder = (tabs) => {
 return ({
  type: UPDATE_CHARACTER_INFO,
  info: {field: 'tabs', value: tabs}
})
}

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

export const sortTabs = () => ({
  type: SORT_TABS
});