
// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index';
import Counter from './screens/Counter';


const store = createStore(
  rootReducer
);

export default App = () => {
  return (
    <Provider store={store}>    
        <Counter />   
    </Provider>
  );
};