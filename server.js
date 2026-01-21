const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use either GEMINI_API_KEY or PALM_API_KEY (PaLM API is more reliable for now)
const API_KEY = process.env.GEMINI_API_KEY || process.env.PALM_API_KEY || process.env.API_KEY;
console.log('=== SERVER STARTUP DEBUG ===');
console.log('API_KEY loaded:', API_KEY ? 'YES' : 'NO');
console.log('API Key length:', API_KEY ? API_KEY.length : 0);
console.log('Environment variables with API:', Object.keys(process.env).filter(key => key.includes('GEMINI') || key.includes('PALM') || key.includes('API')));
console.log('Current working directory:', process.cwd());
console.log('=== END DEBUG ===');

// Use PaLM API (more reliable than current Gemini endpoint)
const PALM_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=${API_KEY}`;
console.log('Using PaLM API endpoint...');

// Mental health response database
const mentalHealthResponses = {
    // Sadness/Depression keywords
    sadness: [
        "I'm truly sorry you're feeling this sadness right now. It's incredibly brave of you to acknowledge these feelings and reach out. You don't have to carry this alone - I'm here with you.",
        "Sadness can feel so heavy and overwhelming. I want you to know that your feelings are completely valid, and it's okay to grieve what you've lost or what hurts. Would you like to share what's been weighing on your heart?",
        "It's okay to not be okay. Many people walk through seasons of sadness, and it doesn't make you weak - it makes you human. You're showing real strength by being honest about how you feel.",
        "When sadness visits, it can help to sit with those feelings rather than push them away. What has been contributing to this sadness for you? I'm here to listen without judgment.",
        "Your sadness matters to me. It's a sign that you have a beautiful capacity for deep emotions and care deeply about life. What support would be most helpful right now?"
    ],

    anxiety: [
        "I can hear the anxiety in your words, and I want you to know that you're not alone in this experience. Anxiety can feel so overwhelming, but you're taking a courageous step by naming it.",
        "When anxiety arises, it often helps to gently bring our attention to the present moment. What are you noticing in your body right now? I'm here to support you through this.",
        "It's brave to acknowledge your anxiety rather than letting it control you from the shadows. Let's explore what might be triggering these feelings together.",
        "Anxiety is your nervous system's way of trying to keep you safe, even when it sometimes feels unhelpful. What thoughts or situations tend to bring this anxiety up for you?",
        "You're not alone in feeling anxious - it's one of the most common human experiences. What would support you most in this moment? I'm here to help you navigate these feelings."
    ],

    stress: [
        "Stress can really take a toll on our well-being. What aspects of your life are feeling most stressful right now?",
        "It's common to feel overwhelmed by stress. Would you like to break down what's contributing to this feeling?",
        "When stress builds up, it helps to identify what we can control and what we can't. What feels most overwhelming to you?",
        "You're showing great awareness by recognizing your stress. Let's work together on some ways to manage it."
    ],

    lonely: [
        "Feeling lonely can be really painful, even when we're surrounded by others. I'm here with you right now.",
        "Connection is such an important human need, and it's okay to feel lonely sometimes. What kind of connection are you missing?",
        "Many people feel lonely, even in crowds. It's a sign of your desire for meaningful relationships.",
        "You're reaching out now, which shows your strength and desire for connection. That's a positive step."
    ],

    tired: [
        "Feeling exhausted is completely understandable, especially in our fast-paced world. What kind of tired are you feeling - physical, emotional, or both?",
        "Rest is essential for our well-being. What might be draining your energy right now?",
        "It's okay to feel tired. Our bodies and minds need rest to function well. What would help you feel more rested?",
        "Burnout is real, and it's okay to acknowledge when you're running low on energy."
    ],

    angry: [
        "Anger is a valid emotion that tells us something important about our boundaries or values. What sparked this anger for you?",
        "It's healthy to feel anger sometimes - it shows you care about things. What would you like to do with this anger?",
        "Anger can be a secondary emotion that protects us from more vulnerable feelings. What might be underneath the anger?",
        "Expressing anger appropriately is a skill we can develop. What would help you feel more in control of these feelings?"
    ],

    confused: [
        "Feeling confused can be unsettling. Life doesn't always make sense, and that's okay.",
        "It's normal to feel uncertain sometimes. What specifically feels confusing to you right now?",
        "When things feel unclear, it helps to focus on what we do know and what we can control.",
        "Confusion often precedes clarity. You're taking a good step by acknowledging how you feel."
    ],

    happy: [
        "I'm so glad to hear you're feeling happy! What has contributed to this positive feeling?",
        "Happiness is worth celebrating and savoring. What would you like to do to maintain this feeling?",
        "It's wonderful that you're experiencing joy. What brings you the most happiness in life?",
        "Positive emotions are important to acknowledge too. What made you smile recently?"
    ],

    grateful: [
        "Gratitude is such a powerful emotion. What are you feeling grateful for right now?",
        "Practicing gratitude can really shift our perspective. What small things bring you joy?",
        "It's beautiful that you're noticing the good things in life. What would you like to express more gratitude for?",
        "Gratitude helps us focus on what we have rather than what we lack. That's a healthy mindset."
    ],

    // Default responses for general conversation
    general: [
        "Thank you for trusting me with your thoughts and feelings. I hear you, and I want to acknowledge how vulnerable it can feel to open up like this.",
        "I appreciate you sharing this with me. Your experiences and feelings matter deeply. How does talking about this make you feel?",
        "That sounds really important to you, and I'm honored that you're willing to explore it. What would support you most right now?",
        "I'm here with you in this moment, listening without judgment. What's most present for you right now?",
        "Your feelings are completely valid and worthy of attention. What do you need most in this conversation?",
        "It's brave to share your authentic self like this. What would help you feel most supported and understood right now?",
        "I hear the importance in what you're saying. What would be most helpful for us to focus on together?"
    ],

    // Greeting responses
    greeting: [
        "Hello! I'm Lucius, your compassionate mental health companion. I'm here to listen deeply, offer support, and help you navigate your thoughts and feelings with warmth and understanding. How are you feeling in this moment?",
        "Hi there! I'm Lucius, a mental health specialist dedicated to providing a safe, judgment-free space for you to explore your emotions and experiences. What's on your heart today?",
        "Welcome! I'm Lucius, and I'm honored to be here with you. My role is to offer empathetic listening, validation, and gentle support as you navigate life's challenges. How are you doing right now?"
    ]
};

// Function to analyze message and return appropriate response
function getMentalHealthResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
        return mentalHealthResponses.greeting[Math.floor(Math.random() * mentalHealthResponses.greeting.length)];
    }

    // Check for sadness keywords
    if (lowerMessage.match(/\b(sad|depressed|depression|down|blue|unhappy|heartbroken|grief|mourn|loss)\b/)) {
        return mentalHealthResponses.sadness[Math.floor(Math.random() * mentalHealthResponses.sadness.length)];
    }

    // Check for anxiety keywords
    if (lowerMessage.match(/\b(anxious|anxiety|nervous|worried|panic|scared|fear|frightened|overwhelmed)\b/)) {
        return mentalHealthResponses.anxiety[Math.floor(Math.random() * mentalHealthResponses.anxiety.length)];
    }

    // Check for stress keywords
    if (lowerMessage.match(/\b(stress|stressed|pressure|overwhelmed|burnt out|exhausted|too much)\b/)) {
        return mentalHealthResponses.stress[Math.floor(Math.random() * mentalHealthResponses.stress.length)];
    }

    // Check for loneliness keywords
    if (lowerMessage.match(/\b(lonely|alone|isolated|disconnected|friendless|abandoned)\b/)) {
        return mentalHealthResponses.lonely[Math.floor(Math.random() * mentalHealthResponses.lonely.length)];
    }

    // Check for tiredness keywords
    if (lowerMessage.match(/\b(tired|exhausted|fatigued|drained|weary|sleepy|worn out)\b/)) {
        return mentalHealthResponses.tired[Math.floor(Math.random() * mentalHealthResponses.tired.length)];
    }

    // Check for anger keywords
    if (lowerMessage.match(/\b(angry|mad|frustrated|irritated|annoyed|rage|furious)\b/)) {
        return mentalHealthResponses.angry[Math.floor(Math.random() * mentalHealthResponses.angry.length)];
    }

    // Check for confusion keywords
    if (lowerMessage.match(/\b(confused|unsure|lost|uncertain|bewildered|puzzled)\b/)) {
        return mentalHealthResponses.confused[Math.floor(Math.random() * mentalHealthResponses.confused.length)];
    }

    // Check for happiness keywords
    if (lowerMessage.match(/\b(happy|joy|excited|pleased|delighted|cheerful|content)\b/)) {
        return mentalHealthResponses.happy[Math.floor(Math.random() * mentalHealthResponses.happy.length)];
    }

    // Check for gratitude keywords
    if (lowerMessage.match(/\b(grateful|thankful|appreciative|blessed|fortunate)\b/)) {
        return mentalHealthResponses.grateful[Math.floor(Math.random() * mentalHealthResponses.grateful.length)];
    }

    // Default response for general conversation
    return mentalHealthResponses.general[Math.floor(Math.random() * mentalHealthResponses.general.length)];
}

// Chat endpoint - now using local keyword-based responses
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);

    try {
        // Get appropriate response based on message content
        const response = getMentalHealthResponse(message);

        console.log('Generated response using keyword matching');

            res.json({
                success: true,
            response: response
        });

    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate response.',
            response: "I'm here to listen and support you. Could you tell me more about what's on your mind?"
                });
    }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;