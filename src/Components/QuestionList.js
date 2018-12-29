import React, { Component } from 'react';
import Results from './Results.js';
import Scorebox from './ScoreBox.js';
import Question from './Question.js';

const totalTestQuestions = 5;

var chosen = [];
var tempData = require('./../quiz.json');

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            score: 0
        }
    }

    setCurrent(current) {
        this.setState({ current });
    }


    setScore(score) {
        this.setState({ score });
    }

    randomNumber = () => {
        var randomIndex = Math.floor(Math.random() * tempData.questions.length);
        var i = 0;
        while (i < totalTestQuestions) {
            if (chosen[i] === randomIndex)
                return this.randomNumber();
            i++;
        }
        chosen.push(randomIndex);
        return randomIndex;
    }

    render() {

        var currentIndex = this.randomNumber()

        if (this.state.current > totalTestQuestions) {
            var scorebox = '';
            var result = <Results {...this.state} totalTestQuestions={totalTestQuestions} />
            var questions = '';
        }
        else {
            scorebox = <Scorebox  {...this.state} />
            questions = <Question
                {...this.state}
                questionData={tempData.questions}
                currentIndex={currentIndex}
                setScore={this.setScore.bind(this)}
                setCurrent={this.setCurrent.bind(this)}
                randomNumber={this.randomNumber}
            />
            result = '';
        }

        return (
            <div>
                {scorebox}
                {questions}
                {result}

            </div>
        );


    }
}

export default QuestionList