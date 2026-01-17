function showFeedbackScreen() {
  const chatPageWrapper = document.querySelector('.chat-page-wrapper');
  let currentFeedbackStep = 1;
  const totalFeedbackSteps = 4;

  const feedbackQuestions = [
      {
          title: "Session Complete! Did this conversation help you feel better?",
          subtitle: "Your thoughts help us improve your experience.",
          options: [
              "It was amazing! I feel much better",
              "It helped a lot, feeling lighter now.",
              "It was okay, but I expected more.",
              "It didn't really help me."
          ]
      },
      {
          title: "Did your consultant provide meaningful support or actionable advice?",
          subtitle: "Your thoughts help us improve your experience.",
          options: [
              "Very helpful",
              "Somewhat helpful",
              "Not helpful",
              "Gained confidence"
          ]
      },
      {
          title: "Did the conversation help you gain a new perspective?",
          subtitle: "Your thoughts help us improve your experience.",
          options: [
              "Yes",
              "No",
              "Somewhat",
              "Not sure"
          ]
      },
      {
          title: "Did you feel emotionally lighter or more at ease after talking?",
          subtitle: "Your thoughts help us improve your experience.",
          options: [
              "Yes",
              "No",
              "Somewhat",
              "Not sure"
          ]
      }
  ];

  function updateFeedbackProgress() {
      const progressFill = document.querySelector('.progress-fill');
      const progress = (currentFeedbackStep / totalFeedbackSteps) * 100;
      progressFill.style.width = `${progress}%`;
  }

  function showFeedbackQuestion(step) {
      const question = feedbackQuestions[step - 1];
      const feedbackHTML = `
          <div class="feedback-container">
              <div class="feedback-header">
                  <div class="progress-bar">
                      <div class="progress-fill"></div>
                  </div>
              </div>
              <div class="feedback-content">
                  <h2>${question.title}</h2>
                  <p class="feedback-subtitle">${question.subtitle}</p>
                  
                  <div class="feedback-options">
                      ${question.options.map(option => `
                          <button class="feedback-option">
                              <span>${option}</span>
                          </button>
                      `).join('')}
                  </div>

                  <button class="skip-btn">Skip All</button>
                  <button class="next-btn">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.4991 5.99997C0.4991 6.19888 0.5782 6.38965 0.71885 6.5303C0.8595 6.67095 1.05027 6.74997 1.2491 6.74997H12.9386L8.2181 11.469C8.1484 11.5387 8.0931 11.6215 8.0554 11.7126C8.0176 11.8037 7.9982 11.9014 7.9982 12C7.9982 12.0986 8.0176 12.1962 8.0554 12.2873C8.0931 12.3785 8.1484 12.4612 8.2181 12.531C8.2879 12.6007 8.3707 12.656 8.4618 12.6938C8.5529 12.7315 8.6505 12.7509 8.7491 12.7509C8.8477 12.7509 8.9454 12.7315 9.0365 12.6938C9.1276 12.656 9.2104 12.6007 9.2801 12.531L13.2801 6.531C13.35 6.4613 13.4054 6.37854 13.4432 6.28742C13.481 6.1963 13.5005 6.09862 13.5005 5.99997C13.5005 5.90132 13.481 5.80364 13.4432 5.71252C13.4054 5.6214 13.35 5.53864 13.2801 5.46897L9.2801 0.468971C9.2104 0.399239 9.1276 0.343925 9.0365 0.306186C8.9454 0.268447 8.8477 0.249023 8.7491 0.249023C8.6505 0.249023 8.5529 0.268447 8.4618 0.306186C8.3707 0.343925 8.2879 0.399239 8.2181 0.468971C8.1484 0.538703 8.0931 0.621487 8.0554 0.712596C8.0176 0.803705 7.9982 0.901355 7.9982 0.999971C7.9982 1.09859 8.0176 1.19624 8.0554 1.28735C8.0931 1.37846 8.1484 1.46124 8.2181 1.53097L12.9386 6.24997H1.2491C1.05027 6.24997 0.8595 6.32899 0.71885 6.46964C0.5782 6.61029 0.4991 6.80106 0.4991 5.99997Z" fill="white" stroke="white" stroke-width="1.5"/>
                      </svg>
                  </button>
              </div>
          </div>
      `;

      chatPageWrapper.innerHTML = feedbackHTML;
      updateFeedbackProgress();

      // Add event listeners
      const nextBtn = document.querySelector('.next-btn');
      const skipBtn = document.querySelector('.skip-btn');
      const options = document.querySelectorAll('.feedback-option');

      nextBtn.addEventListener('click', () => {
          if (currentFeedbackStep < totalFeedbackSteps) {
              currentFeedbackStep++;
              showFeedbackQuestion(currentFeedbackStep);
          } else {
              showLoadingScreen();
          }
      });

      skipBtn.addEventListener('click', () => {
          // Skip all questions and go directly to loading screen
          showLoadingScreen();
      });

      options.forEach(option => {
          option.addEventListener('click', () => {
              options.forEach(opt => opt.classList.remove('active'));
              option.classList.add('active');
          });
      });
  }

  // Start with first question
  showFeedbackQuestion(currentFeedbackStep);
}

function showLoadingScreen() {
  const chatPageWrapper = document.querySelector('.chat-page-wrapper');
  const loadingHTML = `
      <div class="loading-container">
          <div class="loader"><img class="loader-image" src="images/div.spinner.png" alt="loader"></div>
          <p>Based your feedback, Summary, Notes and with Lucius AI<br>crafting your mental health journey.</p>
      </div>
  `;
  chatPageWrapper.innerHTML = loadingHTML;

  // Show summary page after 5 seconds
  setTimeout(showSummaryPage, 1);
}