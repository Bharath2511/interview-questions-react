import {Component} from 'react'
import './index.css'

const downArrowImage = 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
const upArrowImage = 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
class InterviewQuestion extends Component {
  state = {
    isAnswerVisible: false,
  }

  onClickAnswer = () => {
    this.setState(prevState => ({isAnswerVisible: !prevState.isAnswerVisible}))
  }

  renderCardHeader = () => {
    const {language, difficultyLevel} = this.props
    let classCategory
    if (language === 'HTML') {
      classCategory = 'html language'
    } else if (language === 'CSS') {
      classCategory = 'css language'
    } else {
      classCategory = 'javascript language'
    }
    let classLevel
    if (difficultyLevel === 'EASY') {
      classLevel = 'easy difficulty'
    } else if (difficultyLevel === 'MEDIUM') {
      classLevel = 'medium difficulty'
    } else {
      classLevel = 'hard difficulty'
    }
    return (
      <div className="card-header">
        <span className={classCategory}>{language}</span>
        <span className={classLevel}>{difficultyLevel}</span>
      </div>
    )
  }

  onButtonClick = () => {
    this.setState(prevState => ({isAnswerVisible: !prevState.isAnswerVisible}))
  }

  renderButton = () => {
    const {isAnswerVisible} = this.state
    const imageUrl = isAnswerVisible ? upArrowImage : downArrowImage
    const altText = isAnswerVisible ? 'up arrow' : 'down arrow'
    const buttonText = isAnswerVisible ? 'Hide' : 'Show'
    return (
      <button className="button" type="button" onClick={this.onButtonClick}>
        {buttonText}{' '}
        <img src={imageUrl} alt={altText} className="arrow-image" />
      </button>
    )
  }

  showAnswer = () => {
    const {answerText} = this.props
    const {isAnswerVisible} = this.state
    if (isAnswerVisible) {
      return (
        <>
          <p className="answer-text">{answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    const {questionText} = this.props
    return (
      <div className="question-card">
        {this.renderCardHeader()}
        <h1 className="card-question">{questionText}</h1>
        {this.renderButton()}
        {this.showAnswer()}
      </div>
    )
  }
}

export default InterviewQuestion
