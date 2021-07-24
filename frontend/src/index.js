/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './styles';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';

const token = localStorage.getItem('token')
if(token) store.dispatch({type: 'ADD_TOKEN', payload: token})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
