import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { loginUser } from '../actions/login';
import './styles.scss';
import { App } from '../App';

class Login extends React.Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, use: null, token: ''};
        this.googleResponse = this.googleResponse.bind(this);
    }

    logout() {
        this.setState({isAuthenticated: false, token: '', user: null})
    }

    onFailure(error) {
      alert(error)
    }

    googleResponse(response) {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
            console.log(r.headers, "adfhewfcd");    //Not being reached
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
        console.log(this.state);
    }

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
              <div className = 'login-container'>
                  <h1>Athena</h1>
                  <GoogleLogin
                            clientId="270824897857-7gidntd5p1b0d53hkh824rf2faps4ufh.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.googleResponse}
                            onFailure={this.googleResponse}
                        />
                </div>
            );

            /*return (
                <div className="Login"> {
                      content
                    }
                </div>
            );
            */
            return (<App/>);

  }
}

// const mapStateToProps = (state) => {
//     return { ...state };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: () => dispatch(loginUser()),
//     };
// };

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
// };

export default Login;
