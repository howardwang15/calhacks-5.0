import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>hello</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default connect(mapStateToProps)(Login);
