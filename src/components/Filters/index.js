import {Component} from 'react'
import './index.css'

class Filters extends Component {
  handleLanguageChange = event => {
    const {onChangeLanguage} = this.props
    const {value} = event.target
    onChangeLanguage(value)
    console.log(value)
  }

  handleLevelChange = event => {
    const {onChangeDifficultyLevel} = this.props
    const {value} = event.target
    onChangeDifficultyLevel(value)
    console.log(value)
  }

  renderLanguages = () => {
    const {languageData} = this.props
    return languageData.map(eachLanguage => {
      const {id, language} = eachLanguage
      return (
        <option value={language} key={id}>
          {language}
        </option>
      )
    })
  }

  renderDifficulty = () => {
    const {levelsData} = this.props
    return levelsData.map(eachLevel => {
      const {id, level} = eachLevel
      return (
        <option value={level} key={id}>
          {level}
        </option>
      )
    })
  }

  render() {
    return (
      <>
        <div className="language-container">
          <label className="label" htmlFor="languageInput">
            LANGUAGES
          </label>
          <select
            id="languageInput"
            name="languageInput"
            className="language-input"
            onChange={this.handleLanguageChange}
          >
            {this.renderLanguages()}
          </select>
        </div>
        <div className="difficulty-container">
          <label className="label" htmlFor="difficultyInput">
            DIFFICULTY LEVEL
          </label>
          <select
            id="difficultyInput"
            name="difficultyInput"
            className="difficulty-input"
            onChange={this.handleLevelChange}
          >
            {this.renderDifficulty()}
          </select>
        </div>
      </>
    )
  }
}

// const {
//   levelsData,
//   languageData,
//   onChangeDifficultyLevel,
//   onChangeLanguage,
// } = props

export default Filters
