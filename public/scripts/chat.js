// Modify your click handler for the expert profile button
document.querySelector('.expert-profile .primary-btn').addEventListener('click', function() {
  // Create new page content
  const newPageContent = `
  <div class="chat-page-wrapper">

      <div class="nav-container-wrapper">
          <div class="nav-container">
              <div class="nav-buttons">
                  <button class="nav-btn">Conversations</button>
                  <button class="nav-btn" onclick="window.location.href='resources.html'" id="resources-btn">Resources</button>
                  <button class="nav-btn" onclick="window.location.href='exercises.html'" id="exercises-btn">Exercises</button>
              </div>
          </div>
      </div>
      
      <button class="side-arrow left-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
      
      <button class="side-arrow right-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <div class="chat-page-container">
          <div class="chat-progress-container">
              <div class="bars-background-container">
                  <div class="chat-bars-container">
                      <div class="chat-vertical-bar green-fill"></div>
                      <div class="chat-vertical-bar orange-fill"></div>
                  </div>
                  <svg class="progress-base" xmlns="http://www.w3.org/2000/svg" width="142" height="43" viewBox="0 0 142 43" fill="none">
                      <g filter="url(#filter0_ddd_140_1526)">
                          <ellipse cx="71" cy="17.5" rx="67" ry="17.5" fill="url(#paint0_radial_140_1526)"/>
                      </g>
                      <defs>
                          <filter id="filter0_ddd_140_1526" x="0" y="0" width="142" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.258824 0 0 0 0 1 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_140_1526"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="effect1_dropShadow_140_1526" result="effect2_dropShadow_140_1526"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="effect2_dropShadow_140_1526" result="effect3_dropShadow_140_1526"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_140_1526" result="shape"/>
                          </filter>
                          <radialGradient id="paint0_radial_140_1526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71 22) rotate(174.289) scale(30.1496 34.4844)">
                          <stop stop-color="#7F6FC3"/>
                          <stop offset="1" stop-color="#993CC3"/>
                          </radialGradient>
                      </defs>
                  </svg>
              </div>
          </div>
          
          <div class="chat-container">
              <div class="chat-messages">
                  <!-- Messages will appear here -->
              </div>
              <div class="chat-input-area">
                  <input type="text" placeholder="Type your message..." class="chat-input">
                  <button class="emoji-btn">😊</button>
                  <button class="send-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                  </button>
              </div>
          </div>

          <div class="right-side-container">
              <div class="right-background-container">
                  <div class= "tracking-section">
                      <p class= "tracking-title">Track your positive words</p>
                      <div class="word-slots">
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                      </div>
                      <p class="words-count"><span>0</span> Positive words used</p>
                  </div>
                  <div class= "Ai-summarise-container">
                      <p class= "Ai-summarise-title">Reflections AI</p>
                      <button class= "summarise-btn">Summarise conversation</button>
                      <button class= "insight-btn">Insight Recap</button>
                  </div>
                  <div class= "notes-container">
                      <div class= "notes-shapes">
                          <img src= "images/notes1.png" alt= "notes">
                          <img src= "images/notes2.png" alt= "notes">
                          <img src= "images/notes3.png" alt= "notes">
                          <img src= "images/notes4.png" alt= "notes">
                      </div>
                  </div>
                  <button class= "end-conversation-btn">
                      End Conversation
                  </button>
              </div>
          </div>
      </div>
  </div>
  `;
  
  // Create new page content
  document.body.innerHTML = newPageContent;
  
  // Initialize chat functionality AFTER the new content is added
  initializeSideArrows();
  initializeChat();
  initializeEndConversation();
  initializeEmojiPicker();
  initializeNoteShapes();
});

// Add event listener for the navbar Start Conversation button
document.querySelector('.nav-primary-btn').addEventListener('click', function() {
  // Create new page content (same as expert profile button)
  const newPageContent = `
  <div class="chat-page-wrapper">

      <div class="nav-container-wrapper">
          <div class="nav-container">
              <div class="nav-buttons">
                  <button class="nav-btn">Conversations</button>
                  <button class="nav-btn" onclick="window.location.href='resources.html'" id="resources-btn">Resources</button>
                  <button class="nav-btn" onclick="window.location.href='exercises.html'" id="exercises-btn">Exercises</button>
              </div>
          </div>
      </div>

      <button class="side-arrow left-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <button class="side-arrow right-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <div class="chat-page-container">
          <div class="chat-progress-container">
              <div class="bars-background-container">
                  <div class="chat-bars-container">
                      <div class="chat-vertical-bar green-fill"></div>
                      <div class="chat-vertical-bar orange-fill"></div>
                  </div>
                  <svg class="progress-base" xmlns="http://www.w3.org/2000/svg" width="142" height="43" viewBox="0 0 142 43" fill="none">
                      <g filter="url(#filter0_ddd_140_1526)">
                          <ellipse cx="71" cy="17.5" rx="67" ry="17.5" fill="url(#paint0_radial_140_1526)"/>
                      </g>
                      <defs>
                          <filter id="filter0_ddd_140_1526" x="0" y="0" width="142" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.258824 0 0 0 0 1 0 0 0 1 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_140_1526"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="effect1_dropShadow_140_1526" result="effect2_dropShadow_140_1526"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="effect2_dropShadow_140_1526" result="effect3_dropShadow_140_1526"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_140_1526" result="shape"/>
                          </filter>
                          <radialGradient id="paint0_radial_140_1526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71 22) rotate(174.289) scale(30.1496 34.4844)">
                              <stop stop-color="#7F6FC3"/>
                              <stop offset="1" stop-color="#993CC3"/>
                          </radialGradient>
                      </defs>
                  </svg>
              </div>
          </div>

          <div class="chat-container">
              <div class="chat-messages">
                  <!-- Messages will appear here -->
              </div>
              <div class="chat-input-area">
                  <input type="text" placeholder="Type your message..." class="chat-input">
                  <button class="emoji-btn">😊</button>
                  <button class="send-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                  </button>
              </div>
          </div>

          <div class="right-side-container">
              <div class="right-background-container">
                  <div class= "tracking-section">
                      <p class= "tracking-title">Track your positive words</p>
                      <div class="word-slots">
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                      </div>
                      <p class="words-count"><span>0</span> Positive words used</p>
                  </div>
                  <div class= "Ai-summarise-container">
                      <p class= "Ai-summarise-title">Reflections AI</p>
                      <button class= "summarise-btn">Summarise conversation</button>
                      <button class= "insight-btn">Insight Recap</button>
                  </div>
                  <div class= "notes-container">
                      <div class= "notes-shapes">
                          <img src= "images/notes1.png" alt= "notes">
                          <img src= "images/notes2.png" alt= "notes">
                          <img src= "images/notes3.png" alt= "notes">
                          <img src= "images/notes4.png" alt= "notes">
                      </div>
                  </div>
                  <button class= "end-conversation-btn">
                      End Conversation
                  </button>
              </div>
          </div>
      </div>
  </div>
  `;

  // Create new page content
  document.body.innerHTML = newPageContent;

  // Initialize chat functionality AFTER the new content is added
  initializeSideArrows();
  initializeChat();
  initializeEndConversation();
  initializeEmojiPicker();
  initializeNoteShapes();
});

// Global function to create chat interface directly
function createChatInterface() {
  // Create new page content
  const newPageContent = `
  <div class="chat-page-wrapper">

      <div class="nav-container-wrapper">
          <div class="nav-container">
              <div class="nav-buttons">
                  <button class="nav-btn">Conversations</button>
                  <button class="nav-btn" onclick="window.location.href='resources.html'" id="resources-btn">Resources</button>
                  <button class="nav-btn" onclick="window.location.href='exercises.html'" id="exercises-btn">Exercises</button>
              </div>
          </div>
      </div>

      <button class="side-arrow left-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <button class="side-arrow right-arrow">
          <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <div class="chat-page-container">
          <div class="chat-progress-container">
              <div class="bars-background-container">
                  <div class="chat-bars-container">
                      <div class="chat-vertical-bar green-fill"></div>
                      <div class="chat-vertical-bar orange-fill"></div>
                  </div>
                  <svg class="progress-base" xmlns="http://www.w3.org/2000/svg" width="142" height="43" viewBox="0 0 142 43" fill="none">
                      <g filter="url(#filter0_ddd_140_1526)">
                          <ellipse cx="71" cy="17.5" rx="67" ry="17.5" fill="url(#paint0_radial_140_1526)"/>
                      </g>
                      <defs>
                          <filter id="filter0_ddd_140_1526" x="0" y="0" width="142" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.258824 0 0 0 0 1 0 0 0 1 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_140_1526"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="effect1_dropShadow_140_1526" result="effect2_dropShadow_140_1526"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="4"/>
                              <feGaussianBlur stdDeviation="2"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                              <feBlend mode="normal" in2="effect2_dropShadow_140_1526" result="effect3_dropShadow_140_1526"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_140_1526" result="shape"/>
                          </filter>
                          <radialGradient id="paint0_radial_140_1526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71 22) rotate(174.289) scale(30.1496 34.4844)">
                              <stop stop-color="#7F6FC3"/>
                              <stop offset="1" stop-color="#993CC3"/>
                          </radialGradient>
                      </defs>
                  </svg>
              </div>
          </div>

          <div class="chat-container">
              <div class="chat-messages">
                  <!-- Messages will appear here -->
              </div>
              <div class="chat-input-area">
                  <input type="text" placeholder="Type your message..." class="chat-input">
                  <button class="emoji-btn">😊</button>
                  <button class="send-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                  </button>
              </div>
          </div>

          <div class="right-side-container">
              <div class="right-background-container">
                  <div class= "tracking-section">
                      <p class= "tracking-title">Track your positive words</p>
                      <div class="word-slots">
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                          <div class="word-slot"></div>
                      </div>
                      <p class="words-count"><span>0</span> Positive words used</p>
                  </div>
                  <div class= "Ai-summarise-container">
                      <p class= "Ai-summarise-title">Reflections AI</p>
                      <button class= "summarise-btn">Summarise conversation</button>
                      <button class= "insight-btn">Insight Recap</button>
                  </div>
                  <div class= "notes-container">
                      <div class= "notes-shapes">
                          <img src= "images/notes1.png" alt= "notes">
                          <img src= "images/notes2.png" alt= "notes">
                          <img src= "images/notes3.png" alt= "notes">
                          <img src= "images/notes4.png" alt= "notes">
                      </div>
                  </div>
                  <button class= "end-conversation-btn">
                      End Conversation
                  </button>
              </div>
          </div>
      </div>
  </div>
  `;

  // Replace the current page content with the chat interface
  document.body.innerHTML = newPageContent;

  // Initialize chat functionality AFTER the new content is added
  initializeSideArrows();
  initializeChat();
  initializeEndConversation();
  initializeEmojiPicker();
  initializeNoteShapes();
}

// Separate function to initialize chat
function initializeChat() {
  const chatMessages = document.querySelector('.chat-messages');
  const chatInput = document.querySelector('.chat-input');
  const sendButton = document.querySelector('.send-button');

  // Add greeting message from AI with typing simulation
  setTimeout(() => {
    // Show typing indicator first
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate Lucius "thinking" for 1-2 seconds (more responsive)
    const thinkingDelay = 1000 + Math.random() * 1000; // 1-2 seconds
    setTimeout(() => {
      typingIndicator.remove();

      const greetingMessage = createBotMessage("Hello! I'm Lucius, your mental health companion. I'm here to listen, support, and help you navigate your thoughts. What would you like to talk about?");
      chatMessages.appendChild(greetingMessage);

      // Add entrance animation
      greetingMessage.style.opacity = '0';
      greetingMessage.style.transform = 'translateY(20px)';

      setTimeout(() => {
        greetingMessage.style.transition = 'all 0.3s ease';
        greetingMessage.style.opacity = '1';
        greetingMessage.style.transform = 'translateY(0)';
      }, 10);
    }, thinkingDelay);
  }, 500);

  async function sendMessage() {
      const message = chatInput.value.trim();
      if (message) {
          try {
              // Create and display user message
              const userMessageContainer = createUserMessage(message);
              chatMessages.appendChild(userMessageContainer);
              
              // Clear input and scroll to bottom
              chatInput.value = '';
              chatMessages.scrollTop = chatMessages.scrollHeight;
              
              // Show typing indicator with realistic delay
              const typingIndicator = document.createElement('div');
              typingIndicator.className = 'typing-indicator';
              typingIndicator.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
              chatMessages.appendChild(typingIndicator);
              chatMessages.scrollTop = chatMessages.scrollHeight;

              // Add realistic typing delay (1.5-3 seconds to simulate thinking)
              const typingDelay = 1500 + Math.random() * 1500; // 1.5-3 seconds
              await new Promise(resolve => setTimeout(resolve, typingDelay));

              // Send message to backend
              const response = await fetch('http://localhost:3003/api/chat', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ message }),
              });

              // Remove typing indicator
              typingIndicator.remove();

              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }

              const data = await response.json();
              
              if (data.success) {
                  const botMessageContainer = createBotMessage(data.response);
                  chatMessages.appendChild(botMessageContainer);
                  
                  // Add entrance animation
                  botMessageContainer.style.opacity = '0';
                  botMessageContainer.style.transform = 'translateY(20px)';
                  
                  setTimeout(() => {
                      botMessageContainer.style.transition = 'all 0.3s ease';
                      botMessageContainer.style.opacity = '1';
                      botMessageContainer.style.transform = 'translateY(0)';
                  }, 10);
              } else {
                  throw new Error(data.error || 'Failed to get response');
              }
          } catch (error) {
              console.error('Chat error:', error);
              const errorMessage = createBotMessage('Sorry, I encountered an error. Please try again.');
              chatMessages.appendChild(errorMessage);
          }
          
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }
  }

  // Send button click handler
  sendButton.addEventListener('click', sendMessage);

  // Enter key handler
  chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
      }
  });
}

document.getElementById("send").addEventListener("click", async () => {
  const userMessage = document.getElementById("message").value;
  const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
  });
  const data = await response.json();
  document.getElementById("response").innerText = data.choices[0].message.content;
});

// Make sure this is called after your newPageContent is added to the DOM
function initializeSideArrows() {
  const leftArrow = document.querySelector('.left-arrow');
  const leftContainer = document.querySelector('.bars-background-container');
  const chatContainer = document.querySelector('.chat-container');
  let isHidden = false;
  let isRightHidden = false;

  leftArrow.addEventListener('click', () => {
      if (!isHidden) {
          leftContainer.style.transform = 'translateX(-120%)';
          leftContainer.style.opacity = '0';
          leftArrow.classList.add('rotated');
          leftArrow.querySelector('svg').style.transform = 'rotate(5deg)';
          chatContainer.classList.add('stretch-left');
      } else {
          leftContainer.style.transform = 'translateX(0)';
          leftContainer.style.opacity = '1';
          leftArrow.classList.remove('rotated');
          leftArrow.querySelector('svg').style.transform = 'rotate(0deg)';
          chatContainer.classList.remove('stretch-left');
      }
      isHidden = !isHidden;
  });

  const rightArrow = document.querySelector('.right-arrow');
  const rightSideContainer = document.querySelector('.right-side-container');

  rightArrow.addEventListener('click', function() {
      if (!isRightHidden) {
          rightSideContainer.style.transform = 'translateX(120%)';
          rightSideContainer.style.opacity = '0';
          rightArrow.classList.add('rotated');
          rightArrow.querySelector('svg').style.transform = 'rotate(5deg)';
          chatContainer.classList.add('stretch-right');
      } else {
          rightSideContainer.style.transform = 'translateX(0)';
          rightSideContainer.style.opacity = '1';
          rightArrow.classList.remove('rotated');
          rightArrow.querySelector('svg').style.transform = 'rotate(0deg)';
          chatContainer.classList.remove('stretch-right');
      }
      isRightHidden = !isRightHidden;
  });
}

function initializeEmojiPicker() {
  const emojiBtn = document.querySelector('.emoji-btn');
  
  // Common emojis array
  const emojis = [
      '😊', '😂', '🥰', '😍', '😎', 
      '👍', '❤️', '✨', '🎉', '🙌',
      '😃', '🤗', '💪', '👏', '🌟',
      '🤔', '👋', '🔥', '💯', '⭐'
  ];
  
  // Create emoji picker HTML
  const pickerHTML = `
      <div class="emoji-picker">
          <div class="emoji-picker-content">
              ${emojis.map(emoji => `
                  <button class="emoji-option">${emoji}</button>
              `).join('')}
          </div>
      </div>
  `;
  
  // Add picker to container
  emojiBtn.insertAdjacentHTML('beforebegin', pickerHTML);
  
  const emojiPicker = document.querySelector('.emoji-picker');
  const chatInput = document.querySelector('.chat-input');
  
  // Toggle picker
  emojiBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      emojiPicker.classList.toggle('active');
  });
  
  // Handle emoji selection
  document.querySelectorAll('.emoji-option').forEach(option => {
      option.addEventListener('click', (e) => {
          e.stopPropagation();
          chatInput.value += e.target.textContent;
          emojiPicker.classList.remove('active');
      });
  });
  
  // Close picker when clicking outside
  document.addEventListener('click', (e) => {
      if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
          emojiPicker.classList.remove('active');
      }
  });
}

// Update your message creation function to include profile picture
function createUserMessage(message) {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container user-message-container';
  
  const messageElement = document.createElement('div');
  messageElement.className = 'chat-message user-message';
  messageElement.textContent = message;
  
  const profilePic = document.createElement('img');
  profilePic.className = 'message-pfp';
  profilePic.src = 'images/Dragonfly Illustration 1.png'; // Update with your profile picture path
  profilePic.alt = 'User profile';
  
  messageContainer.appendChild(messageElement);
  messageContainer.appendChild(profilePic);
  
  return messageContainer;
}

function createBotMessage(message) {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container bot-message-container';
  
  const profilePic = document.createElement('img');
  profilePic.className = 'message-pfp';
  profilePic.src = 'images/Humanoid Robot at Grand Piano 1.png'; // Update with bot profile picture
  profilePic.alt = 'Bot profile';
  
  const messageElement = document.createElement('div');
  messageElement.className = 'chat-message bot-message';
  messageElement.textContent = message;
  
  // Add pfp first, then message
  messageContainer.appendChild(profilePic);
  messageContainer.appendChild(messageElement);
  
  return messageContainer;
}

function initializeNoteShapes() {
  const notesContainer = document.querySelector('.notes-container');
  const shapes = document.querySelectorAll('.notes-shapes img');
  
  // Define color mapping based on image order
  const colorMap = [
      '#FFD700', // Yellow for first image
      '#FFA500', // Orange for second image
      '#32CD32', // Green for third image
      '#FFC0CB'  // Pink for fourth image
  ];

  shapes.forEach((shape, index) => {
      shape.addEventListener('click', function() {
          // Remove any existing active note inputs
          const existingNote = notesContainer.querySelector('.note-input-container');
          if (existingNote) {
              existingNote.remove();
          }
          
          // Get color based on the clicked image's index
          const shapeColor = colorMap[index];
          
          // Create note input container
          const noteInputContainer = document.createElement('div');
          noteInputContainer.className = 'note-input-container';
          noteInputContainer.style.backgroundColor = shapeColor;
          
          // Create textarea
          const textarea = document.createElement('textarea');
          textarea.className = 'note-textarea';
          textarea.placeholder = 'Type your note here...';
          
          noteInputContainer.appendChild(textarea);
          notesContainer.appendChild(noteInputContainer);
          
          // Focus the textarea
          textarea.focus();
      });
  });
}

function initializeProgressRings() {
  // Get the percentage value from the div
  const percentageElement = document.querySelector('.percentage');
  const percentageValue = parseInt(percentageElement.textContent);
  
  // Get both progress rings
  const progressRings = document.querySelectorAll('.circular-progress circle');
  
  // Calculate the circle's circumference
  const radius = progressRings[0].r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set initial state of circles
  progressRings.forEach(ring => {
      ring.style.strokeDasharray = `${circumference} ${circumference}`;
      ring.style.strokeDashoffset = circumference;
  });
  
  // Calculate the offset based on percentage
  const offset = circumference - (percentageValue / 100 * circumference);
  
  // Animate the progress rings
  progressRings.forEach(ring => {
      // Reset to starting position
      ring.style.strokeDashoffset = circumference;
      
      // Trigger reflow
      ring.getBoundingClientRect();
      
      // Add transition
      ring.style.transition = 'stroke-dashoffset 1s ease-in-out';
      
      // Set the progress
      ring.style.strokeDashoffset = offset;
  });
}

// Call this function when the page loads or when needed
document.addEventListener('DOMContentLoaded', initializeProgressRings);

// If you need to update the progress later
function updateProgress(newPercentage) {
  const percentageElement = document.querySelector('.percentage');
  percentageElement.textContent = `${newPercentage}%`;
  initializeProgressRings();
}

// Add this to your initialization function
function initializeEndConversation() {
  const endButton = document.querySelector('.end-conversation-btn');
  
  const modalHTML = `
      <div class="end-chat-modal">
          <div class="modal-content">
              <h3>Are you sure you want to end this conversation</h3>
              <div class="modal-buttons">
                  <button class="modal-btn no-btn">No</button>
                  <button class="modal-btn yes-btn">Yes</button>
              </div>
          </div>
      </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modal = document.querySelector('.end-chat-modal');
  const noBtn = document.querySelector('.no-btn');
  const yesBtn = document.querySelector('.yes-btn');
  
  endButton.addEventListener('click', () => {
      modal.style.display = 'flex';
      modal.offsetHeight; // Trigger reflow
      modal.classList.add('active');
  });

  noBtn.addEventListener('click', () => {
      closeModal();
  });

  yesBtn.addEventListener('click', () => {
      closeModal();
      showFeedbackScreen();
  });

  function closeModal() {
      modal.classList.add('closing');
      modal.classList.remove('active');
      setTimeout(() => {
          modal.classList.remove('closing');
          modal.style.display = 'none';
      }, 300);
  }
}