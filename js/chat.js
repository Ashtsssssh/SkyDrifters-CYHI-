// script.js
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

let chatHistory = [];

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = chatInput.value.trim();
  if (userInput) {
    addChatMessage(userInput, 'user');
    chatInput.value = '';
    sendChatMessageToServer(userInput);
  }
});

function addChatMessage(message, role) {
  const chatMessage = document.createElement('li');
  chatMessage.textContent = message;
  chatMessage.className = role;
  chatLog.appendChild(chatMessage);
  chatHistory.push({ message, role });
}

function sendChatMessageToServer(message) {
  // send message to server using AJAX or WebSocket
  console.log(`Sending message to server: ${message}`);
}