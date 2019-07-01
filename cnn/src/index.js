import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/main/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
