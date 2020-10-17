import React, { Component } from 'react'
import '../css/MainQuiz.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { QuizData } from '../QuizData'


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

    // componentDidMount() {
    //     fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy')
    //         .then(res => res.json())
    //         .then(json => this.setState({
    //             items: json.results
    //         }))

    //     .then();


    // }


    loadQuiz = () => {
        const { items } = this.state
        const { currentIndex } = this.state;
        if (this.state.items && this.state.items[currentIndex]) {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].incorrect_answers,
                    answer: QuizData[currentIndex].correct_answer
                }
            })
        }



    }

    nextQuestionHandler = () => {
        const { currentIndex, userAnswer, answer, score } = this.state;

        if (userAnswer === QuizData[currentIndex].correct_answer) {
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
        this.loadQuiz()
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disebled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].incorrect_answers,
                    answer: QuizData[currentIndex].correct_answer
                }
            })
        }

    }

    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true,
            })
        }
    }

    

    render() {


        const { question, options, currentIndex, userAnswer, quizEnd, items } = this.state

        const wrong = QuizData[currentIndex].incorrect_answers
        const correct = QuizData[currentIndex].correct_answer

        if (quizEnd) {
            return (
                <div>
                    <h1>
                        Game Over. Final score is {this.state.score} points
                    </h1>
                    <p>
                        
                    </p>
                    <button onClick={this.resetHandler}>
                        Reset
                    </button>
                </div>
            )

        }

        return (
            <>

                <div>

                    <h2>{QuizData[currentIndex].question}</h2>
                    <h1>{`Question ${currentIndex + 1} of ${QuizData.length} `}</h1>
                    {
                        wrong.map(option =>
                            <p key={currentIndex} className={`options ${userAnswer === option ? "selected" : null}`}
                                onClick={() => this.checkAnswer(option)}
                            >
                                {option}

                            </p>
                        )
                    }

                    <p key={currentIndex} className={`options ${userAnswer === correct ? "selected" : null}`}
                        onClick={() => this.checkAnswer(correct)}
                    >
                        {QuizData[currentIndex].correct_answer}

                    </p>

                    {
                        currentIndex < QuizData.length - 1 &&
                        <button disabled={this.state.disebled} onClick={this.nextQuestionHandler}>
                            Next Question
                        </button>

                    }

                    {
                        currentIndex === QuizData.length - 1 &&
                        <button onClick={this.finishHandler} disabled={this.state.disebled}>
                            Finish
                        </button>
                    }
                </div>



            </>
        )
    }
}

export default MainQuiz;