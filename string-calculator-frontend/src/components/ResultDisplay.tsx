import React from 'react';

interface ResultDisplayProps {
  result: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  // Use a fragment to conditionally render the content
  return (
    <>
      {result !== null ? (
        <div className="mt-4 text-xl">
          Result: {result}
        </div>
      ) : null} {/* Return null explicitly if result is null */}
    </>
  );
};

export default ResultDisplay;
