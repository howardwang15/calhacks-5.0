import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class Test extends React.Component {
    render() {
        return (
            <div className='container'>
                <button>hello</button>
            </div>
        );
    }
}

const root = (
    <Provider store={createStore()}>
        <Test />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
