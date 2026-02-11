# Javascript Basics Project: Rock Paper Scissors

**Project Summary:** This project is a console-only implementation of the classic game "Rock, Paper, Scissors." It is part of The Odin Project's curriculum, designed to practice the implementation of core logic utilizing concepts learned in the foundations course (Functions, Conditionals, and Scope).

## How to Play

1. Open `index.html` in your browser.
    
2. Open the Developer Tools (Right-click > Inspect, or F12).
    
3. Navigate to the **Console** tab.
    
4. Follow the prompts to play!
    

## Key Features

**1. 5-Round Gameplay** The game is played entirely within the browser's developer console, pitting a human player against a computer opponent for 5 rounds.

**2. Custom Probability Logic** The Computer's choice is determined by mapping random numbers (0-100) to the three choices. The logic uses a `switch` statement based on randomized and discontinuous integer ranges to ensure variety:

- **Rock:** Covers ranges 0-20 and 61-74.
    
- **Paper:** Covers ranges 21-40 and 75-87.
    
- **Scissors:** Covers ranges 41-60 and 88-100.
    

_Note: The rationale behind these discontinuous ranges is based on experimental observation of `Math.random()` behavior. While not statistically rigorous, the approach ensures every choice has a roughly equal theoretical probability._

**3. Robust Input Handling (The Fail-Safe)** The project instructions required case-insensitive input (e.g., accepting "rock", "ROCk", etc.). I used string manipulation to normalize all input into a capitalized format ("Rock") for consistency.

Since the curriculum has not yet covered Loops (which would allow re-prompting on invalid input), I implemented a **fail-safe mechanism** to keep the game running:

- If a user inputs invalid data (e.g., a typo or a word other than the three choices), the program detects it and generates a random valid choice on the user's behalf.
    
- This ensures the 5-round game loop continues uninterrupted without crashing.
    

## What I Learned

- **Planning > Coding:** I spent significant time dissecting the requirements and drafting a "problem statement" before writing a single line of code. Identifying the specific elements (Computer Choice, User Choice, Score Variables) beforehand made the actual coding process much smoother and more cohesive.
    
- **Scope Management:** I learned how to pass variables effectively between helper functions (`getComputerChoice`) and the main game controller (`playGame`).
    
- **Refactoring:** Initially, I stored the function for each round in separate variables. During the code review, I realized this was redundant. I refactored the code to call the functions directly within the arguments, making the script more efficient and readable.
    
- **Working with Constraints:** Since Loops and Arrays were not yet permitted, I had to be creative with function calls to simulate a 5-round game cycle.
