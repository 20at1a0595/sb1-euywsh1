import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getAnswer(question: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    return response.choices[0]?.message?.content || 'No answer received';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get response from OpenAI');
  }
}