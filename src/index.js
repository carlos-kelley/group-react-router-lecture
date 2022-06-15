import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const animalReducer = (state = 0, action) => {
    if (action.type === "INCREMENT_ANIMALS") {
        state += action.payload;
    }
    return state;
};

const plantReducer = (state = 0, action) => {
    if (action.type === "INCREMENT_PLANTS") {
        state += action.payload;
    }
    return state;
};

const store = createStore(
    combineReducers({
        animalReducer,
        plantReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
