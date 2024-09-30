import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import InputField from './components/InputField';
import CalculateButton from './components/CalculateButton';
import ResultDisplay from './components/ResultDisplay';
import axios from 'axios';

function App() {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/add', { numbers });
      setResult(response.data.result);
      setError(null);
    } catch (err: any) {
      setError(err.response.data.error);
      setResult(null);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between p-4">
        <h1 className="text-3xl font-bold">String Calculator</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="max-w-lg mx-auto mt-10 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
        <InputField numbers={numbers} setNumbers={setNumbers} />
        <CalculateButton handleCalculate={handleCalculate} />
        <ResultDisplay result={result} />
      </div>
    </div>
  );
}

export default App;
