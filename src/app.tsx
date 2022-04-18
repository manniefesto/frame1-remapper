import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

function render() {
    const root = ReactDOM.createRoot(document.querySelector('#root'));
    root.render("Hello world");
}

render();