import React, { Component } from 'react'
import '../css/MainQuiz.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import QuizData from '../QuizData'

class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: null,
            score: 0,
            quizEnd: false,
            options: [],
            currentIndex: 0,
            disebled: true

        }

        }
        
        loadQuiz = () => {
            const {currentIndex} = this.state;
            this.setState(() => {
                return {
                    question: this.props.items[currentIndex].question,
                    options: this.props.items[currentIndex].options,
                    answer: this.props.items[currentIndex].answer
                }
            })
    }




    render() {

        console.log(this.props.items)
        return (
            <>
                <div>
                    
                </div>
                

            </>
        )
    }
}

export default MainQuiz;