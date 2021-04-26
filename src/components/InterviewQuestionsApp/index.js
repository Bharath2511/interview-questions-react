import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

let filteredQuestions = []

class InterviewQuestionsApp extends Component {
  state = {
    language: 'ALL',
    difficultyLevel: 'ALL',
  }

  onChangeDifficultyLevel = value => {
    this.setState({difficultyLevel: value})
  }

  onChangeLanguage = value => {
    this.setState({language: value})
  }

  getQuestions = () => {
    const {questionsData} = this.props
    const {language, difficultyLevel} = this.state
    if (language === 'ALL' && difficultyLevel === 'ALL') {
      filteredQuestions = [...questionsData]
    } else if (language === 'ALL' && difficultyLevel !== 'ALL') {
      filteredQuestions = questionsData.filter(
        question => question.difficultyLevel === difficultyLevel,
      )
    } else if (language !== 'ALL' && difficultyLevel === 'ALL') {
      filteredQuestions = questionsData.filter(
        question => question.language === language,
      )
    } else {
      filteredQuestions = questionsData.filter(
        question =>
          question.language === language &&
          question.difficultyLevel === difficultyLevel,
      )
    }
    return filteredQuestions
  }

  render() {
    this.getQuestions()
    console.log(filteredQuestions)
    const {levelsData, languageData} = this.props
    return (
      <div className="question-container">
        <div className="bg-container">
          <h1 className="main-heading">30 Seconds of Interviews</h1>
          <div className="img-container">
            <img
              className="image"
              alt="img"
              src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            />
          </div>
        </div>
        <div className="questions-container">
          <div className="option-container">
            <Filters
              levelsData={levelsData}
              languageData={languageData}
              onChangeDifficultyLevel={this.onChangeDifficultyLevel}
              onChangeLanguage={this.onChangeLanguage}
            />
          </div>
          <div className="questions-card-container">
            {filteredQuestions.map(question => {
              const {
                id,
                questionText,
                answerText,
                language,
                difficultyLevel,
              } = question
              return (
                <InterviewQuestion
                  key={id}
                  questionText={questionText}
                  answerText={answerText}
                  language={language}
                  difficultyLevel={difficultyLevel}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
