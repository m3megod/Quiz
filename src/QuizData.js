import React, { Component } from 'react'
import MainQuiz from './pages/MainQuiz';

class QuizData extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy')
        .then(res => res.json())
        .then(json =>this.setState({
            items: json,
        }))
        

        
    }
    

    

    render(){
        var {items} = this.state;
        
        const data = this.state.items.results
        
        
    

        return(
            <>

    
            <div>
                <MainQuiz items={data} />
            </div>
        
            </>

            
        )
        
    }
}



export default QuizData;