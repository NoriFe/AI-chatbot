const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const hideBtn = document.getElementById('hide-btn');
const chatContainer = document.querySelector('.chat-container');

let stage = 0;

// toggle chat visibility
hideBtn.addEventListener('click', () => {
  const chatBody = document.getElementById('chat-body');
  const chatFooter = document.querySelector('.chat-footer');

  if (chatBody.style.display !== 'none') {
    chatBody.style.display = 'none';
    chatFooter.style.display = 'none';
    hideBtn.textContent = '+';
  } else {
    chatBody.style.display = 'block';
    chatFooter.style.display = 'flex';
    hideBtn.textContent = '−';
  }
});
// adding new msg to chat window
function addMessage(message, sender = 'bot') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'my-1', 'p-2', 'rounded');

  if (sender === 'bot') {
    messageDiv.classList.add('bg-primary', 'text-white', 'align-self-start');
  } else {
    messageDiv.classList.add('bg-light', 'text-dark', 'align-self-end');
  }

  messageDiv.textContent = message; 
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // auto scroll to bottom
}

// a little delay
function botReply(message, delay = 700) {
  setTimeout(() => addMessage(message, 'bot'), delay); 
}

// handle user input and bot responses
function handleUserInput() {
  const userText = userInput.value.trim().toLowerCase();
  if (userText === '') return;

  addMessage(userText, 'user');
  userInput.value = '';

 
  if (stage === 0) {
    botReply("Hello! 👋 I'm 10008358 AI Chatbot.");
    botReply("How are you doing today?");
    stage = 1;
  } 
  else if (stage === 1) {
    if (userText.includes("good") || userText.includes("great") || userText.includes("ok") || userText.includes("fine")) {
      botReply("That's awesome! 😊 I'm glad to hear that.");
    } 
    else if (userText.includes("bad") || userText.includes("not good") || userText.includes("sad")) {
      botReply("Oh no! 😢 I hope your day gets better soon. Remember, small progress is still progress 💪");
    } 
    else {
      botReply("Hmm, I see. It’s ok, I’m here to chat with you!");
    }
    botReply("So, how can I help you today? Would you like to learn more about 10008358?");
    stage = 2;
  } 
  else {    
    if (userText.includes("yes") || userText.includes("sure") || userText.includes("ok")) {
      botReply("Great! You can ask me about his 'skills', 'projects', or 'background'.");
    } 
    else if (userText.includes("no") || userText.includes("not really") || userText.includes("maybe later")) {
      botReply("No problem! I’m here if you change your mind. 😊");
    } 
    else if (userText.includes("skills")) {
      botReply("Here are some of his main skills: JavaScript, Ruby on Rails, PHP, HTML, CSS, and more! 💻 But pssst… don't tell anyone, he's learning Python now and the syntax is giving him a bit of a headache 😅");
    } 
    else if (userText.includes("projects")) {
      botReply("Check out his projects on GitHub: https://github.com/NoriFe ");
    } 
    else if (userText.includes("background")) {
      botReply("He isa full stack developer with experience in building web apps using Rails, JS, and modern front end tools.");
    } 
    else {
      botReply("I'm still in phases of learning, but you can ask me about 'skills', 'projects' or 'background'.");
    }
  }
}

// 
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') handleUserInput();
});

// bot greeting on load
window.onload = () => {
  botReply("Hello there! 👋 I'm 10008358 AI Chatbot.");
  botReply("How are you doing today?");
  stage = 1;
};
