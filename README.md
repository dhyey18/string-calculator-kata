# String Calculator TDD Kata

## Overview
This project implements a simple String Calculator as part of a TDD (Test-Driven Development) approach. The calculator accepts a string of comma-separated numbers (with support for new lines and custom delimiters) and returns their sum. It also handles negative numbers and ignores numbers greater than 1000.

## Technologies Used
- **Frontend**: TypeScript, React, Tailwind CSS
- **Backend**: Node.js, TypeScript, Express
- **Testing**: Jest, React Testing Library

## Features
- Handles empty strings: `""` returns `0`
- Supports single and multiple numbers: 
  - Input: `"1"` → Output: `1`
  - Input: `"1,5"` → Output: `6`
- Handles new lines as delimiters: 
  - Input: `"1\n2,3"` → Output: `6`
- Supports custom delimiters: 
  - Input: `"//;\n1;2"` → Output: `3`
- Throws exceptions for negative numbers: 
  - Input: `"1,-2,3"` → Output: `Error: Negative numbers not allowed: -2`
- Ignores numbers greater than 1000.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/string-calculator.git
   cd string-calculator
2. npm install 
3. npm run start or npm run test
4. cd string-calculator-frontend
    - npm install
    - npm run start or npm run test


Conclusion :
    This project demonstrates a solid understanding of TDD principles, TypeScript, React, and Express. The clean separation between frontend and backend allows for easy modifications and enhancements in the future. 

Feel free to explore and extend the functionality of this String Calculator!
