function showSummaryPage() {
  const chatPageWrapper = document.querySelector('.chat-page-wrapper');
  const summaryHTML = `
      <div class="intro-summary-page">
          <div class="image-container">
              <img class="summary-loader-image" src="images/div.spinner.png" alt="loader">
          </div>
          <div class="text-container">
              <h1 class="summary-heading">Hi, I am Lucious</h1>
              <h2 class="summary-subheading">Your mental health guide</h2>
          </div>
          <div class="button-container">
              <button class="dashboard-btn">View Dashboard</button>
              <button class="new-conversation-btn">New Conversation</button>
          </div>
      </div>
      <div class="summary-page">
          <p class="summary-words">You used [12] supportive words today!</p>
          <p class="summary-support">You & Consultant exchanged 85% similar supportive words</p>
          <p class="summary-mood">Your mood improved by 42% after this session!</p>
          <p class="summary-insights">🧩 Self-Discovery Insights: You're realizing work stress impacts your sleep</p>
      </div>
      <div class="summary-footer-container">
        <div class="big-takeaway">
            <div>Today's Big Takeaway</div>
            <div>Next Step Suggestions</div>
        </div>
        <div class="next-step-suggestions">
            <div>You discovered that expressing frustration is okay! Naming your emotions helped.</div>
            <div>Try journaling tomorrow about what made you feel good today!</div>
        </div>
      </div>
  `;
  chatPageWrapper.innerHTML = summaryHTML;

  // Add event listener for the View Dashboard button
  const dashboardBtn = document.querySelector('.dashboard-btn');
  dashboardBtn.addEventListener('click', () => {
      // Redirect to the dashboard (index.html) and skip questions
      window.location.href = 'index.html?skipQuestions=true';
  });

  // Add event listener for the New Conversation button
  const newConversationBtn = document.querySelector('.new-conversation-btn');
  newConversationBtn.addEventListener('click', () => {
      // Directly create the chat interface
      createChatInterface();
  });
}