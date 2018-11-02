import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { loginUser } from '../actions/login';
import './styles.scss';

class Login extends React.Component {
    render() {
        const { login } = this.props;
        return (
            <div className='login-container'>
                <h1>Welcome to BarelyBears</h1>
                <GoogleLogin
                    clientId='24294340444-cbkcge063u251lu4sctte6r4a48p9cda.apps.googleusercontent.com'
                    onSuccess={login}
                    onFailure={(response) => { console.log(response); }}
                >
                    Sign in with Google
                </GoogleLogin>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(loginUser()),
    };
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
