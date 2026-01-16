const questions = [
  {
      question: "How are you feeling today?",
      options: [
          { emoji: "😊", text: "Feeling positive and energetic!" },
          { emoji: "🙂", text: "Doing okay, pretty balanced" },
          { emoji: "😐", text: "Not so great, feeling neutral" },
          { emoji: "😔", text: "Having a rough day" }
      ]
  },
  {
      question: "How was your day?",
      options: ["Great day! Feeling happy and motivated", "Had its ups and downs", "Rather challenging", "Just taking it slow"]
  },
  {
      question: "What's on your mind today?",
      options: ["Career and Work", "Relationships", "Family and Friends", "Others/Not Sure"]
  },
  {
      question: "What would you prefer?",
      options: ["Advice", "Support", "Just a chat", "Others/Not Sure"]
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const progressBar = document.querySelector('.progress');
const currentQuestionNum = document.getElementById('current');

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  
  optionsContainer.innerHTML = '';
  
  if (currentQuestion === 0) {
      // Special handling for first question with emoji and text
      question.options.forEach((option, index) => {
          const button = document.createElement('div');
          button.classList.add('option');
          button.setAttribute('data-question', currentQuestion);
          
          const emojiSpan = document.createElement('span');
          emojiSpan.classList.add('emoji');
          emojiSpan.textContent = option.emoji;
          
          const textSpan = document.createElement('span');
          textSpan.classList.add('hover-text');
          textSpan.textContent = option.text;
          
          button.appendChild(emojiSpan);
          button.appendChild(textSpan);
          button.addEventListener('click', () => selectOption(button));
          optionsContainer.appendChild(button);
      });
  } else {
      // Normal handling for other questions
      question.options.forEach((option, index) => {
          const button = document.createElement('div');
          button.classList.add('option');
          button.setAttribute('data-question', currentQuestion);
          button.textContent = option;
          button.addEventListener('click', () => selectOption(button));
          optionsContainer.appendChild(button);
      });
  }
  
  // Show arrow on all pages
  const arrowContainer = document.querySelector('.arrow-container');
  arrowContainer.style.display = 'block';
  
  // Add a class to fade the arrow on first question
  if (currentQuestion === 0) {
      arrowContainer.classList.add('first-page');
  } else {
      arrowContainer.classList.remove('first-page');
  }
  
  nextButton.disabled = false;
  currentQuestionNum.textContent = `${currentQuestion + 1} out of ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function selectOption(selectedOption) {
  document.querySelectorAll('.option').forEach(option => {
      option.classList.remove('selected');
  });
  selectedOption.classList.add('selected');
  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
  } else {
      // Show final loader only when clicking next on last question
      showFinalLoader();
  }
});

// Update click event for the arrow
document.querySelector('.arrow').addEventListener('click', () => {
  if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
  }
});

// Show first question when page loads
showQuestion();

// Update the initial loader timing
document.addEventListener('DOMContentLoaded', function() {
  const initialLoader = document.getElementById('initial-loader');
  const mainContent = document.querySelector('.main-content');
  const resultsPage = document.querySelector('.results-page');

  // Check if we should skip questions and go directly to dashboard
  const urlParams = new URLSearchParams(window.location.search);
  const skipQuestions = urlParams.get('skipQuestions');
  const startChatDirect = urlParams.get('startChatDirect');

  if (startChatDirect === 'true') {
      // Skip everything and go directly to chat interface
      initialLoader.style.display = 'none';
      mainContent.style.display = 'none';
      resultsPage.style.display = 'none';
      document.body.classList.remove('dashboard-active');
      createChatInterface();
      return;
  }

  if (skipQuestions === 'true') {
      // Skip questions and go directly to dashboard/results page
      initialLoader.style.display = 'none';
      mainContent.style.display = 'none';
      resultsPage.style.display = 'block';
      // Apply dashboard background
      document.body.classList.add('dashboard-active');
      return;
  }

  // Show initial loader for time taken
  setTimeout(() => {
      initialLoader.style.opacity = '0';
      initialLoader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
          initialLoader.style.display = 'none';
          mainContent.style.display = 'block';
      }, 500);
  }, 2000 + Math.random() * 500); // Show loader for 1.5-2 seconds
});

function showFinalLoader() {
  const finalLoader = document.getElementById('final-loader');
  const mainContent = document.querySelector('.main-content');
  const resultsPage = document.querySelector('.results-page');
  
  mainContent.style.display = 'none';
  finalLoader.style.display = 'flex';
  
  setTimeout(() => {
      finalLoader.style.opacity = '0';
      finalLoader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
          finalLoader.style.display = 'none';
          resultsPage.style.display = 'block';
      }, 500);
  }, 2000 + Math.random() * 500); // Show loader for 1.5-2 seconds
}