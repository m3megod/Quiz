import React, { Component } from 'react'
import '../css/MainQuiz.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            userAnswer: null,
            score: 0,
            quizEnd: false,
            options: [],
            currentIndex: 0,
            disebled: true

        }



    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy')
            .then(res => res.json())
            .then(json => this.setState({
                items: json.results,
            }))
    }



    loadQuiz = () => {
        
        const { currentIndex } = this.state;
        if (this.state.items && this.state.items[currentIndex]) {
            this.setState(() => {
                return {
                    question: this.state.items[currentIndex].question,
                    options: this.state.items[currentIndex].incorrect_answers,
                    answer: this.state.items[currentIndex].correct_answer
                }
            })
        }



    }

    nextQuestionHandler = () => {
        const { userAnswer, answer, score } = this.state;

        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,

        })
    }

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disebled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const [currentIndex] = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: this.props.items[currentIndex].question,
                    options: this.props.items[currentIndex].incorrect_answers,
                    answer: this.props.items[currentIndex].correct_answer
                }
            })
        }

    }


    render() {


        const { question, options, currentIndex, userAnswer, quizEnd } = this.state
        

        return (
            <>
                <div>
                    <h1>{options}</h1>
                </div>


            </>
        )
    }
}

export default MainQuiz;