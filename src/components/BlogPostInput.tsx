import React, { useState } from 'react'
import { transformContent } from '../api/claude'

interface BlogPostInputProps {
  platform: 'twitter' | 'linkedin'
}

export default function BlogPostInput({ platform }: BlogPostInputProps) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await transformContent(input, platform)
      setOutput(result)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const buttonText = platform === 'twitter' ? 'Convert to Twitter Thread' : 'Convert to LinkedIn Post'

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-48 p-4 border rounded-lg"
          placeholder={`Paste your blog post here to convert to ${platform === 'twitter' ? 'Twitter thread' : 'LinkedIn post'}...`}
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Converting...' : buttonText}
        </button>
      </form>

      {output && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Output:</h2>
          <div className="p-4 bg-white rounded-lg shadow">
            <pre className="whitespace-pre-wrap">{output}</pre>
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 