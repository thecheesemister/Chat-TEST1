const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const message = input.value.trim();
  if (message === '') return;

  addMessage(message);
  input.value = '';
});

function addMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-message';
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // auto scroll to bottom
}
