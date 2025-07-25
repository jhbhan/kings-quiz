import { allTriviaQuestions, categoryNames } from "../types";
import { Slider } from "./shared/Slider";

interface GameSettings {
    selectedQuestionCount: number;
    setSelectedQuestionCount: (count: number) => void;
    selectedCategories: number[];
    handleCategoryChange: (category: number) => void;
    startGame: () => void;
}

export function LandingPage(props: GameSettings) {
    const {
        selectedQuestionCount,
        setSelectedQuestionCount,
        selectedCategories,
        handleCategoryChange,
        startGame,
    } = props;
    
    return (
      <div className="trivia-container">
        <div className="landing-screen">
          <h1 className="app-title">Trivia Challenge</h1>
          <p className="app-description">Customize your trivia experience!</p>

          <div className="game-settings">
            <div className="setting-group">
              <h3>Number of Questions: {selectedQuestionCount}</h3>
                <Slider
                  value={selectedQuestionCount}
                  onChange={setSelectedQuestionCount}
                  min={5}
                  max={20}
                  step={1}
                />
            </div>

            <div className="setting-group">
              <h3>Select Categories</h3>
              <div className="category-options">
                {categoryNames.map((name, index) => {
                  const categoryId = index + 1
                  return (
                    <button
                      key={categoryId}
                      className={`category-option ${selectedCategories.includes(categoryId) ? "selected" : ""}`}
                      onClick={() => handleCategoryChange(categoryId)}
                    >
                      <div className="category-header">
                        <span className="category-name">{name}</span>
                        {selectedCategories.includes(categoryId) && <span className="checkmark">✓</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="game-info">
              <div className="info-summary">
                <p>
                  <strong>{selectedCategories.length}</strong> selected categories
                </p>
              </div>
            </div>
          </div>

          <button
            className="start-btn"
            onClick={startGame}
            disabled={selectedCategories.length === 0}
          >
            Start Game
          </button>
        </div>
      </div>
    )
}
