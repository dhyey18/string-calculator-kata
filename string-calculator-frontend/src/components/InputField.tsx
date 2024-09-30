import React from 'react';

interface InputFieldProps {
  numbers: string;
  setNumbers: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputFieldProps> = ({ numbers, setNumbers }) => {
  return (
    <input 
      type="text"
      value={numbers}
      onChange={(e) => setNumbers(e.target.value)}
      placeholder="Enter numbers"
      className="w-full p-2 mb-4 text-black rounded"
    />
  );
};

export default InputField;
