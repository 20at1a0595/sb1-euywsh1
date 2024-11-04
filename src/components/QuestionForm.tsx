import React from 'react';

interface QuestionFormProps {
  question: string;
  loading: boolean;
  onQuestionChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuestionForm({ question, loading, onQuestionChange, onSubmit }: QuestionFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="question" className="block text-sm font-medium text-gray-700">
          Your Question
        </label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          rows={4}
          placeholder="Type your question here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        {loading ? 'Getting Answer...' : 'Ask Question'}
      </button>
    </form>
  );
}