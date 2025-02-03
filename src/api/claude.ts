import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_CLAUDE_API_KEY,
  dangerouslyAllowBrowser: true  // Required for browser usage
});

export async function transformContent(
  content: string, 
  platform: 'twitter' | 'linkedin'
) {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: platform === 'twitter' 
          ? `Transform this blog post into a Twitter thread (3-5 tweets, 280 chars max each): ${content}`
          : `Transform this blog post into a professional LinkedIn post (around 100 words): ${content}`
      }]
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
} 