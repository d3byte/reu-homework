import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';

import questions from './data/questions.json';
import questionTypes from './data/question-types.json';

ReactDOM.render(<App questions={questions} questionTypes={questionTypes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
