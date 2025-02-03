import React, { useState } from 'react'
import { transformContent } from '../api/claude'

function NewsletterInput() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) {
      setError('Please enter some content first');
      return;
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await transformContent(input, 'linkedin')
      setOutput(result)
    } catch (error) {
      console.error('Error in handleSubmit:', error)
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-48 p-4 border rounded-lg"
          placeholder="Paste your blog post here to convert to newsletter format..."
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? 'Converting...' : 'Convert to LinkedIn Post'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {output && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Output:</h2>
          <div className="p-4 bg-white rounded-lg shadow">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsletterInput 