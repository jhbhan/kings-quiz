import { useState } from 'react'
import type { Question, QuestionResult } from '../types'

interface ResultsProps {
    score: number
    gameQuestions: Question[]
    questionResults: QuestionResult[]
    resetGame: () => void
}

export const Results = (props: ResultsProps) => {
    const {
        score,
        gameQuestions,
        questionResults,
        resetGame,
    } = props;
    
    const [wrongAnswersExpanded, setWrongAnswersExpanded] = useState(true)
    const [rightAnswersExpanded, setRightAnswersExpanded] = useState(false)
    
    const wrongAnswers = questionResults.filter((result) => !result.isCorrect)
    const rightAnswers = questionResults.filter((result) => result.isCorrect)

    return (
      <div className="trivia-container">
        <div className="game-finished">
          <h1>Game Complete!</h1>
          <div className="final-score">
            <h2>
              Your Score: {score} / {gameQuestions.length}
            </h2>
            <p className="score-percentage">{Math.round((score / gameQuestions.length) * 100)}%</p>
          </div>

          <div className="results-sections">
            {/* Wrong Answers Section */}
            <div className="results-section">
              <button
                className="section-header wrong-header"
                onClick={() => setWrongAnswersExpanded(!wrongAnswersExpanded)}
              >
                <span>❌ Questions You Got Wrong ({wrongAnswers.length})</span>
                <span className={`expand-icon ${wrongAnswersExpanded ? "expanded" : ""}`}>▼</span>
              </button>
              {wrongAnswersExpanded && (
                <div className="questions-list">
                  {wrongAnswers.map((result, index) => (
                    <div key={`wrong-${index}`} className="question-result wrong-result">
                      <h4 className="result-question">{result.question.question}</h4>
                      <div className="result-options">
                        {result.question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`result-option ${
                              optionIndex === result.question.correctAnswer
                                ? "correct-option"
                                : optionIndex === result.userAnswer
                                  ? "wrong-option"
                                  : ""
                            }`}
                          >
                            <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                            <span className="option-text">{option}</span>
                            {optionIndex === result.question.correctAnswer && (
                              <span className="option-indicator">✓ Correct</span>
                            )}
                            {optionIndex === result.userAnswer && optionIndex !== result.question.correctAnswer && (
                              <span className="option-indicator">✗ Your Answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {wrongAnswers.length === 0 && (
                    <div className="no-questions">🎉 Perfect! You got all questions right!</div>
                  )}
                </div>
              )}
            </div>

            {/* Right Answers Section */}
            <div className="results-section">
              <button
                className="section-header right-header"
                onClick={() => setRightAnswersExpanded(!rightAnswersExpanded)}
              >
                <span>✅ Questions You Got Right ({rightAnswers.length})</span>
                <span className={`expand-icon ${rightAnswersExpanded ? "expanded" : ""}`}>▼</span>
              </button>
              {rightAnswersExpanded && (
                <div className="questions-list">
                  {rightAnswers.map((result, index) => (
                    <div key={`right-${index}`} className="question-result right-result">
                      <h4 className="result-question">{result.question.question}</h4>
                      <div className="result-options">
                        {result.question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`result-option ${
                              optionIndex === result.question.correctAnswer ? "correct-option" : ""
                            }`}
                          >
                            <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                            <span className="option-text">{option}</span>
                            {optionIndex === result.question.correctAnswer && (
                              <span className="option-indicator">✓ Your Answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {rightAnswers.length === 0 && (
                    <div className="no-questions">😔 No correct answers this time. Better luck next time!</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <button className="play-again-btn" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    )
}
