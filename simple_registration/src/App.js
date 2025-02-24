import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegistrationForm from './components/registrationForm';

const App = () => {
  return (
    <Provider store={store}>
      <RegistrationForm />
    </Provider>
  );
};

export default App;
