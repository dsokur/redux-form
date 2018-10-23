import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
