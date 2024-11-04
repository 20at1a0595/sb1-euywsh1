import React from 'react';

interface AnswerProps {
  answer: string;
}

export function Answer({ answer }: AnswerProps) {
  if (!answer) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-900 mb-2">Answer:</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
      </div>
    </div>
  );
}