import React, { Component } from 'react'
import '../css/Welcome.css'
import MainQuiz from './MainQuiz'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




class Welcome extends Component {
    constructor(props) {
        super(props);
        this.mainDiv = React.createRef();
        this.state = {
            startQuiz: true,
        };

        this.startingQuiz = this.startingQuiz.bind(this);
    }

    startingQuiz() {

        const main = this.mainDiv.current;

        
        this.setState(state => ({
            startQuiz: !state.startQuiz
        }));

        if (this.state.startQuiz === true) {
            main.innerHTML = ''
        }
    }

    render() {
        return (
            <>
                <div ref={this.mainDiv}>


                    <header>
                        <h1>Welcome to My Quiz</h1>
                    </header>

                    <div>
                        <form>
                            <p>Choose a difficulty</p>
                            <select>
                                <option value='easy'>Easy</option>
                                <option value='medium'>Medium</option>
                                <option value='hard'>Hard</option>
                            </select>
                            <p>Choose a category</p>
                            <select>
                                <option value='sports'>Sports</option>
                                <option value='history'>History</option>
                            </select>
                        </form>
                        <Router>
                            <Link to="/mainquiz" className='start'>
                                <button id='start' onClick={this.startingQuiz}>
                                    Start
                            </button>
                            </Link>
                        </Router>

                    </div>
                </div>
            </>

        )
    }

}

export default Welcome;