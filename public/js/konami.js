// src/konami.js

// Define the Konami Code sequence
const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  
  let konamiCodePosition = 0;
  
  function konamiCodeHandler(event) {
    const key = event.code;
  
    if (key === konamiCode[konamiCodePosition]) {
      konamiCodePosition++;
      if (konamiCodePosition === konamiCode.length) {
        konamiCodeActivated();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  }
  
  function konamiCodeActivated() {
    // Get the resultDiv element
    const resultDiv = document.getElementById('result');
  
    // Update the resultDiv with the special message
    const message = `You're 100% gonna make it 🎉`;
    const resultClass = 'text-green-600'; // Use the same styling as positive results
  
    resultDiv.innerHTML = `<span class="result-text ${resultClass}">100% - ${message}</span>`;
    resultDiv.style.opacity = '1'; // Ensure the result is visible
  
    // Show the share button
    const shareButton = document.getElementById('share-button');
    shareButton.classList.remove('hidden');
    shareButton.classList.add('inline-block');
  
    // Trigger confetti
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 400,
        spread: 100,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
      });
    } else {
      console.error('Confetti library is not loaded.');
    }
  }
  
  document.addEventListener('keydown', konamiCodeHandler);
  