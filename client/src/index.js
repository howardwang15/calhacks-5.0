import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Login from './containers/login';
import RootReducer from './reducers';


class Test extends React.Component {
    render() {
        return (
            <div className='container'>
                <Login />
            </div>
        );
    }
}

const store = createStore(RootReducer);

const root = (
    <Provider store={store}>
        <Test />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
