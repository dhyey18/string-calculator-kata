import React from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  // Use a fragment to conditionally render the content
  return (
    <>
      {error ? (
        <div className="mt-4 text-red-500">
          Error: {error}
        </div>
      ) : null} {/* Return null explicitly if error is null */}
    </>
  );
};

export default ErrorDisplay;
