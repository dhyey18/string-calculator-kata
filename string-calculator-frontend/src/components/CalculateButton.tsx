import React from 'react';

interface CalculateButtonProps {
  handleCalculate: () => void;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ handleCalculate }) => {
  return (
    <button 
      onClick={handleCalculate}
      className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Calculate
    </button>
  );
};

export default CalculateButton;
