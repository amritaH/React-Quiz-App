import React, {Component} from 'react';

class Results extends Component{
    render(){
        var percent=((this.props.score / 5) * 100);
            if(percent >= 60){
                var message = 'Congratulations! You have Passed'
            } else{
                message = 'Sorry! You have Failed'
            }
            
        return(
            <div className='well'>
                <h4>You Got {this.props.score} out of {this.props.totalTestQuestions} Correct</h4>
                <h1>{message}</h1>
                <hr/>
                <a href='/app'>Take Again</a>
            </div>
        )
    }
}
export default Results