import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/Tabs'
import BlogPostInput from './components/BlogPostInput'
import NewsletterInput from './components/NewsletterInput'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Content Remixer</h1>
        
        <Tabs defaultValue="twitter" className="w-full">
          <TabsList className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-6">
            <TabsTrigger 
              value="twitter"
              className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700
                data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
            >
              Twitter Thread
            </TabsTrigger>
            <TabsTrigger 
              value="linkedin"
              className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700
                data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
            >
              LinkedIn Post
            </TabsTrigger>
          </TabsList>

          <TabsContent value="twitter">
            <BlogPostInput platform="twitter" />
          </TabsContent>

          <TabsContent value="linkedin">
            <NewsletterInput platform="linkedin" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App 