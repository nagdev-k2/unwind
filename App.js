import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/state/store';
import Navigation from './src/Navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
export default App;
