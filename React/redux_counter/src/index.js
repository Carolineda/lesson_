import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './components/Couter';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {createStore} from 'redux';

const store = createStore(reducer)


ReactDOM.render(<Provider store={store}> 
<Counter /></Provider>,
 document.getElementById('root'));


serviceWorker.unregister();
