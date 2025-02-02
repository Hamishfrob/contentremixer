import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/Tabs'
import BlogPostInput from './components/BlogPostInput'
import NewsletterInput from './components/NewsletterInput'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Content Remixer</h1>
        
        <Tabs defaultValue="blog-post" className="w-full">
          <TabsList className="flex space-x-1 rounded-xl bg-slate-100 p-1 mb-6">
            <TabsTrigger 
              value="blog-post"
              className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700
                data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
            >
              Blog Post
            </TabsTrigger>
            <TabsTrigger 
              value="newsletter"
              className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700
                data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
            >
              Newsletter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog-post">
            <BlogPostInput />
          </TabsContent>

          <TabsContent value="newsletter">
            <NewsletterInput />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App 