import React from 'react';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import Routes from './routes';
import storage from './services/storage';
import store from '../core/lib/adapters/redux/store';

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept(() => store.replaceReducer(require("../core/lib/adapters/redux/store/ducks/rootReducer").default));
}

// import Echo from 'laravel-echo';
// import socketio from 'socket.io-client';

// const echo = new Echo({
//   host: 'https://finances-control-api.herokuapp.com:6001',
//   broadcaster: 'socket.io',
//   client: socketio,
// });

// echo
//   .channel('accounts.1')
//   .listen('NewAccountEvent', ev => console.log(ev));

const App = () => {
  global.storage = storage;

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
