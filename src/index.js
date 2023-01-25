import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';
import './index.css';
import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

//console.log('%cFIELD', 'background-color:red; color: white; padding:10px', field)
//console.log('%cNAME', 'background-color:orange; color: white; padding:10px', name)
//console.log('%cCHILDREN', 'background-color:green; color: white; padding:10px', children)