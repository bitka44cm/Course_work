/** @jsxImportSource @emotion/react */
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import { GlobalStyles } from './components/common/rootStyles';
import { persistor, store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { SnackbarUtilsConfigurator } from './utils/helpers/snackBarUtils';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <SnackbarUtilsConfigurator />
          <GlobalStyles />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
