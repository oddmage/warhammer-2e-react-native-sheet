import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import {combineReducers, createStore} from 'redux';
import { connect, Provider } from 'react-redux'
import {addNavigationHelpers} from 'react-navigation';

import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/es/storage';

import AppNavigator from './components/AppNavigator';
import reducer from './reducers';

// const store = createStore(reducer, noCharacterState);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const persisterConfig = {
  key: 'root',
  storage
};

const appReducer = persistCombineReducers(persisterConfig, {
  nav: navReducer,
  app: reducer
});

function configureStore () {
  let store = createStore(appReducer)
  let persistor = persistStore(store)

  return { persistor, store }
}

class App extends Component<{}> {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const { persistor, store } = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}