import './config/ReactotronConfig';
import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import {setNavigator} from './services/navigation'
const App = () => {
  return (
    <Provider store={store}>
      <Routes ref={setNavigator}/>
    </Provider>
  );
};
export default App;
