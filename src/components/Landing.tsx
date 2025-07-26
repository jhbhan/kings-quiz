import { categoryNamesMap, type Category } from "../types";
import { Slider } from "./shared/Slider";

interface GameSettings {
    selectedQuestionCount: number;
    setSelectedQuestionCount: (count: number) => void;
    selectedCategories: Category[];
    handleCategoryChange: (category: Category) => void;
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
                {Object.entries(categoryNamesMap).map(([key, name]) => {
                  return (
                    <button
                      key={key}
                      className={`category-option ${selectedCategories.includes(key as Category) ? "selected" : ""}`}
                      onClick={() => handleCategoryChange(key as Category)}
                    >
                      <div className="category-header">
                        <span className="category-name">{name}</span>
                        {selectedCategories.includes(key as Category) && <span className="checkmark">✓</span>}
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
