import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

class Test extends React.Component {
    render() {
        return (
            <div className='container'>
                <Button color='secondary' onClick={() => { console.log('goodbye world'); }} />
            </div>
        );
    }
}

const root = (
    <Test />
);

ReactDOM.render(root, document.getElementById('root'));
