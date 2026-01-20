let currentQuestion = 0; // Track the current question index
const questions = [
    {
        question: "Q1. Do certain childhood memories make you feel anxious or sad?",
        answers: [
            "Yes, I often feel anxious or sad when thinking about my childhood memories.",
            "Sometimes I feel anxious or sad when recalling certain memories.",
            "No, I don't feel anxious or sad when thinking about my childhood memories."
        ]
    },
    {
        question: "Q2. Did you feel emotionally neglected or misunderstood as a child?",
        answers: [
            "Yes, I often struggle with trust and fear abandonment.",
            "Sometimes, i feel a bit of fear or mistrust",
            "No, i don't struggle with trust or fear abandonment.",
            "I'm not sure. I haven't thought about it"
        ]
    },
    {
        question: "Q3. Have you experienced sudden emotional reactions without clear reasons?",
        answers: [
            "Yes, i often have emotional reactions that don't seem to make sense.",
            "Sometimes, i have these reactions but not often",
            "No, i don't experience sudden emotional reactions without reasons",
            "I'm not sure, it's hard to recognise when it happens"
        ]
    },
    {
        question: "Q4. Do you think childhood experiences affect adult life?",
        answers: [
            "Yes, I believe they have a significant impact.",
            "Somewhat, but it varies from person to person.",
            "No, I don't think they affect adult life."
        ]
    }
];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');

    // Update the question text
    questionText.textContent = questions[index].question;

    // Clear previous answer buttons
    answerButtons.innerHTML = '';

    // Create answer buttons
    questions[index].answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.onclick = () => selectAnswer(answer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    console.log("Selected answer:", answer); // Handle the selected answer as needed
    // Optionally, you can store the answer or perform other actions here
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
      document.getElementById('loading-screen').style.display = 'flex'; // Show the loading screen
      setTimeout(() => {
          window.location.href = 'next_page.html'; // Redirect to the next page after loading
      }, 1000); // Adjust the timeout duration as needed
    }
}

window.onload = function() {
    showQuestion(currentQuestion); // Show the first question on page load
    document.getElementById('next-button').onclick = nextQuestion; // Set up the next button
};