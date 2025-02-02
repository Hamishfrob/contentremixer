import React, { useState } from 'react'
import { Switch } from './ui/Switch'

interface Section {
  id: 'main_story' | 'news' | 'updates' | 'resources'
  label: string
  enabled: boolean
}

export default function NewsletterInput() {
  const [content, setContent] = useState('')
  const [sections, setSections] = useState<Section[]>([
    { id: 'main_story', label: 'Main Story', enabled: true },
    { id: 'news', label: 'News', enabled: true },
    { id: 'updates', label: 'Updates', enabled: true },
    { id: 'resources', label: 'Resources', enabled: true },
  ])

  const toggleSection = (sectionId: Section['id']) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, enabled: !section.enabled }
        : section
    ))
  }

  return (
    <div className="max-w-content">
      <div className="space-y-4 mb-6">
        {sections.map(section => (
          <div key={section.id} className="flex items-center justify-between">
            <label htmlFor={section.id} className="text-sm font-medium">
              {section.label}
            </label>
            <Switch
              id={section.id}
              checked={section.enabled}
              onCheckedChange={() => toggleSection(section.id)}
            />
          </div>
        ))}
      </div>

      <textarea
        className="w-full h-64 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Enter your newsletter content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  )
} 