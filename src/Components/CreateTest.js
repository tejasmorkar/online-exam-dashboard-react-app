import React, { Component } from 'react';
import './CreateTest.css';
import firebase from '../firebase';

class CreateTest extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questionNumber: '',
            question: '',
            opt1: '',
            opt2: '',
            opt3: '',
            correctOption: '',
            errors: [],
            loading: false,
            questionsRef: firebase.database().ref('topics').child("bnvjdsjncnsdklcd").child('test')
        }
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            //throw error
            error = { message: 'Fill in all fields' };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.isCorrectOptionValid(this.state)) {
            //throw error
            error = { message: 'CorrectOption is invalid' };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            //form valid
            return true;
        }
    }

    displayErrors = (errors) => errors.map((error, i) => <p key={i}> {error.message} </p>);

    isFormEmpty = ({ question, opt1, opt2, opt3, correctOption }) => {
        return !question.length || !opt1.length || !opt2.length || !opt3.length || !correctOption.length;
    }

    isCorrectOptionValid = ({ correctOption }) => {
        if (parseInt(correctOption) < 1 || parseInt(correctOption) > 3) {
            return false;
        } else {
            return true;
        }
    }
    
    onFormSubmit = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            this.setState({errors: [], loading: true});
            this.state.questionsRef.push({
                    question: this.state.question,
                    opt1: this.state.opt1,
                    opt2: this.state.opt2,
                    opt3: this.state.opt3,
                    correctOption: this.state.correctOption
            })
            .then(() => {
                this.setState({
                    question: '',
                    opt1: '',
                    opt2: '',
                    opt3: '',
                    correctOption: '',
                    loading: false
                })
            })
        }
    }

    setQuestionNumber = () => {
        this.state.questionsRef.on('value', snap => {
            this.setState({questionNumber: snap.numChildren()+1});
        })
    }

    componentDidMount () {
        this.setQuestionNumber();
    }
    
  render () {
      const { question, opt1, opt2, opt3, correctOption, errors, loading, questionNumber } = this.state;
      
    return (
        <div className="create-test">
            <form className="card test-form" onSubmit={this.onFormSubmit}>
                <div className="question-number">
                    Q. {questionNumber}
                </div>
            
                <div className="labels">
                    <span className="label">Question: </span>
                    <span className="label">Option 1: </span>
                    <span className="label">Option 2: </span>
                    <span className="label">Option 3: </span>
                    <span className="label">Correct Option: </span>
                </div>

                <div className="inputs">
                    <div className="question">
                        
                        <input 
                            style={{width: '50vw'}}
                            className="input"
                            autoComplete="off"
                            type="text" 
                            id="question" 
                            name="question"
                            value={question}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="option1">
                        
                        <input 
                            style={{width: '20vw'}}
                            className="input"
                            autoComplete="off"
                            type="text" 
                            id="opt1" 
                            name="opt1" 
                            value={opt1}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="option2">
                        
                        <input 
                            style={{width: '20vw'}}
                            className="input"
                            autoComplete="off"
                            type="text" 
                            id="opt2" 
                            name="opt2" 
                            value={opt2}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="option3">
                        
                        <input 
                            style={{width: '20vw'}}
                            className="input"
                            autoComplete="off"
                            type="text" 
                            id="opt3" 
                            name="opt3" 
                            value={opt3}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                    <div className="correct-option">
                        
                        <input 
                            style={{width: '50px'}}
                            className="input"
                            type="number" 
                            id="correct-opt" 
                            name="correctOption"
                            value={correctOption}
                            onChange={this.handleChange}
                        ></input>
                    </div>
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
                    </div> :  
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
        </div>
    );
  }
}

export default CreateTest;
