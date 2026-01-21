# OpenAI API Debugging Steps

## Step 1: Test API Key
Visit: http://localhost:3003/api/test
This will show if your API key is working

## Step 2: Check OpenAI Account
- Go to https://platform.openai.com/usage
- Check if billing is enabled
- Verify account is not restricted

## Step 3: Alternative - Google AI
If OpenAI doesn't work, try Google AI:
- Get key from: https://aistudio.google.com/
- Update .env: PALM_API_KEY=your_key

## Step 4: Manual API Test
Test your API key manually:
curl -H "Authorization: Bearer YOUR_KEY" https://api.openai.com/v1/models
