import React, { useState } from 'react';
import { QuestionForm } from './components/QuestionForm';
import { Answer } from './components/Answer';
import { getAnswer } from './services/openai';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    try {
      const response = await getAnswer(question);
      setAnswer(response);
    } catch (error) {
      setAnswer('Error: Failed to get response. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">AI Q&A Assistant</h1>
        <QuestionForm
          question={question}
          loading={loading}
          onQuestionChange={setQuestion}
          onSubmit={handleSubmit}
        />
        <Answer answer={answer} />
      </div>
    </div>
  );
}

export default App;