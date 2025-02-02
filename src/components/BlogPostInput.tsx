import React, { useState } from 'react'
import { Toggle } from './ui/Toggle'

const MAX_TWITTER_LENGTH = 280
const TARGET_LINKEDIN_WORDS = 100

export default function BlogPostInput() {
  const [inputMethod, setInputMethod] = useState<'text' | 'url'>('text')
  const [content, setContent] = useState('')
  const [url, setUrl] = useState('')
  const [isTransforming, setIsTransforming] = useState(false)

  const characterCount = content.length
  const wordCount = content.trim().split(/\s+/).length

  const handleTransform = async (platform: 'twitter' | 'linkedin') => {
    setIsTransforming(true)
    // TODO: Implement transformation logic
    setIsTransforming(false)
  }

  return (
    <div className="w-full max-w-content mx-auto">
      <div className="flex gap-4 mb-6 p-1 bg-slate-100 rounded-lg w-fit">
        <Toggle 
          pressed={inputMethod === 'text'} 
          onPressedChange={() => setInputMethod('text')}
        >
          Text
        </Toggle>
        <Toggle 
          pressed={inputMethod === 'url'} 
          onPressedChange={() => setInputMethod('url')}
        >
          URL
        </Toggle>
      </div>

      {inputMethod === 'text' ? (
        <div className="space-y-4">
          <textarea
            className="w-full h-64 p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
            placeholder="Enter your blog post content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="text-sm text-slate-500">
            Characters: {characterCount} | Words: {wordCount}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleTransform('twitter')}
              disabled={isTransforming}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              Transform for Twitter
            </button>
            <button
              onClick={() => handleTransform('linkedin')}
              disabled={isTransforming}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors"
            >
              Transform for LinkedIn
            </button>
          </div>
        </div>
      ) : (
        <input
          type="url"
          className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
          placeholder="Enter blog post URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      )}
    </div>
  )
} 