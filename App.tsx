import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MenuScreen from './src/screens/Menu/MenuScreen';


const App = () => (
  <Provider store={store}>
    <MenuScreen />
  </Provider>
)



export default App;
