import React, { Component } from 'react';
import './SignIn.css';
import firebase from '../firebase';

class SignIn extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: [],
      loading: false
    }
  }

  displayErrors = (errors) => errors.map((error, i) => <p key={i}> {error.message} </p>);

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true })
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(signedInUser => {
              this.setState({ loading: false });
              this.props.onSignIn(true);
          })
          .catch(err => {
              console.error(err);
              this.setState({ errors: this.state.errors.concat(err), loading: false });
          })
     } 
  }

  isFormValid = ({ email, password }) => {
    let errors = [];
    let error;

    if (!email || !password) {
        //throw error
        error = { message: 'Fill in all fields' };
        this.setState({ errors: errors.concat(error) });
        return false;
    } else {
        //form valid
        return true;
    }
  }

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "error" : "";
}
  
  render () {
    const { email, password, errors, loading } = this.state;
    return (
      <form className="card sign-in" onSubmit={this.handleSubmit}>

      <div className="inputs">
        <span className={this.handleInputError(errors, "email")}>Email</span>
        <input
          type="email"
          id="email"
          name="email"
          className={this.handleInputError(errors, "email")}
          autoComplete="off"
          value={email}
          onChange={this.handleChange}
        ></input>
        <span className={this.handleInputError(errors, "password")}>Password</span>
        <input
          type="password"
          id="passwrod"
          name="password"
          className={this.handleInputError(errors, "password")}
          autoComplete="off"
          value={password}
          onChange={this.handleChange}
        ></input>
      </div>
        
      <div className="center-box">
          {
            loading ? 
              <div className="preloader-wrapper small active" style={{margin: '1em'}}>
                  <div className="spinner-layer spinner-blue">
                      <div className="circle-clipper left">
                          <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                          <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"></div>
                      </div>
                  </div>

                  <div className="spinner-layer spinner-red">
                      <div className="circle-clipper left">
                          <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                          <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"></div>
                      </div>
                  </div>

                  <div className="spinner-layer spinner-yellow">
                      <div className="circle-clipper left">
                          <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                          <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"></div>
                      </div>
                  </div>

                  <div className="spinner-layer spinner-green">
                      <div className="circle-clipper left">
                          <div className="circle"></div>
                      </div>
                      <div className="gap-patch">
                          <div className="circle"></div>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"></div>
                      </div>
                  </div>
              </div> 
            :  
              <input 
                  style={{margin: '1em'}}
                  className='btn center'
                  disabled={loading}
                  type="submit"
              ></input>
          }
          {
            errors.length > 0 && (
            <div className="error">
                {this.displayErrors(errors)}
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default SignIn;
