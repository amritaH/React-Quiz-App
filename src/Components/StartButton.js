import React, { Component } from 'react';
import QuestionList from './QuestionList.js';

class StartButton extends Component {
    state = {
        isOpen: true
      }
      handleClick = () => {
        this.setState({
          isOpen: false
        })
      }
    
    render() {
        if (this.state.isOpen) {
            return (
                <div>
                    <button className="btn btn-info mt" onClick={this.handleClick}> Start Quiz </button>
                </div>
            )

        }
        else {
            return (
                <div>
                <QuestionList />
                </div>
            );
        }
    }
}
export default StartButton;