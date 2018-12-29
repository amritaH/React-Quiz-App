import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedOption: '' }
    }

    handleClick() {
        const { setCurrent, setScore } = this.props;
        if (this.state.selectedOption == '') {
            alert("Choose an answer");
            return
        }
        else if (this.state.selectedOption == this.props.questionData[this.props.currentIndex].correctIndex) {
            setScore(this.props.score + 1)
        }
        setCurrent(this.props.current + 1)
    }

    handleOnChange(e) {
        this.setState({ selectedOption: e.target.value });
    }

    render() {

        const { answers } = this.props.questionData[this.props.currentIndex]

        if (this.props.current == 4) {
            var submitText = "Complete"
        }
        else {
            var submitText = "Answer"
        }
        return (
            <div className='well'>
                <h3>{this.props.questionData[this.props.currentIndex].question}</h3>
                <hr />
                <ul className='list-group'>
                    {
                        answers.map(choice => {
                            return (
                                <li className='list-group-item' key={answers.indexOf(choice)}>
                                    <label><input type="radio" name={"option"} onChange={(e) => this.handleOnChange(e)} value={answers.indexOf(choice)} />
                                        {choice}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="btn btn-info float-right" onClick={() => this.handleClick()}>  {submitText} </button>
            </div>
        )
    }
}
export default Question