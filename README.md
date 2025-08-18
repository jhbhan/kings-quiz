# Kings Quiz

A trivia game with a retro gaming aesthetic featuring black backgrounds and green neon accents. Test your knowledge across multiple categories with a cyberpunk-inspired interface.

![Kings Quiz Screenshot](https://via.placeholder.com/800x400/000000/00cc33?text=Kings+Quiz+Retro+Gaming)

## Features

### Gameplay

- Multiple categories: Successor, Kingdom, Approval, and Prophet King questions
- Customizable difficulty: Select 5-20 questions per game
- Real-time scoring with animated progress bar
- Instant visual feedback for answers
- Detailed results review with correct answers

### Visual Design

- Black background with green neon accents
- Scanline effects for authentic retro feel
- Smooth animations and hover effects
- Monospace typography for headers
- Glowing borders and neon-style elements

### Responsive Design

- Mobile-optimized layout
- Touch-friendly interface
- Adaptive design for all screen sizes
- Cross-browser compatibility

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/kings-quiz.git
   cd kings-quiz
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Play

1. **Landing Screen**: Choose your game settings

   - Select number of questions (5-20)
   - Choose categories to include
   - Click "Start Game"
2. **Gameplay**: Answer questions

   - Read each question carefully
   - Click on your chosen answer
   - See immediate feedback with animations
   - Watch your progress bar fill up
3. **Results**: Review your performance

   - View your final score and percentage
   - Expand sections to see correct/incorrect answers
   - Click "Play Again" to start a new game

## Technology Stack

- React 18 with TypeScript
- Vite build tool
- CSS3 with custom properties and animations
- React Hooks for state management
- npm package manager

## Project Structure

```
kings-quiz/
├── src/
│   ├── components/
│   │   ├── Landing.tsx          # Landing page with game settings
│   │   ├── Results.tsx          # Results screen with detailed breakdown
│   │   └── shared/
│   │       ├── Slider.tsx       # Custom slider component
│   │       └── slider.css       # Slider styling
│   ├── KingsQuiz.tsx            # Main game component
│   ├── api.ts                   # API functions for fetching questions
│   ├── types.ts                 # TypeScript type definitions
│   ├── index.css                # Main styles with retro theme
│   └── main.tsx                 # App entry point
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Customization

### Theme Colors

The app uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --neon-green: #00cc33;
  --neon-green-glow: #00cc33;
  --neon-green-dim: #009926;
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --text-primary: #ffffff;
}
```

### Adding New Categories

1. Update the `Category` type in `src/types.ts`
2. Add category data to your API
3. Update the `categoryNamesMap` in `src/types.ts`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by classic arcade games and cyberpunk aesthetics
- Built with modern web technologies for optimal performance
- Designed for accessibility and user experience

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/kings-quiz/issues) page
2. Create a new issue with detailed information
3. Include browser version and device information
