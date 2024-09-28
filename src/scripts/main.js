// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const resultDiv = document.getElementById('result');
    const usernameInput = document.getElementById('username-input');
  
    let initialPercentage = null;
    let currentPercentage = null;
    const decrementAmount = 10; // Decrease by 10% each time
  
    // Function to handle the submission logic
    function handleSubmit() {
      const usernameInputValue = usernameInput.value.trim();
      const username = usernameInputValue ? `@${usernameInputValue}` : 'They';
  
      // Disable the button and show loading text
      submitButton.disabled = true;
      submitButton.textContent = 'Calculating...';
      resultDiv.style.opacity = '0';
  
      setTimeout(() => {
        // Generate the initial percentage if it's null
        if (initialPercentage === null) {
          initialPercentage = Math.floor(Math.random() * 101);
          currentPercentage = initialPercentage;
        } else {
          // Decrease the current percentage
          currentPercentage -= decrementAmount;
          if (currentPercentage < 0) {
            currentPercentage = 0;
          }
        }
  
        // Determine the message based on the current percentage
        let message = '';
  
        if (currentPercentage <= 0) {
          message = `${username} have hit rock bottom`;
        } else if (currentPercentage < 50) {
          message = `${username} are not gonna make it`;
        } else {
          message = `${username} are gonna make it`;
        }
  
        // Display the result
        resultDiv.innerHTML = `${currentPercentage}% - ${message}`;
        resultDiv.style.opacity = '1';
  
        // Re-enable the button and reset text
        submitButton.textContent = 'Submit';
        submitButton.disabled = false;
      }, 700);
    }
  
    // Event listener for the submit button click
    submitButton.addEventListener('click', handleSubmit);
  
    // Event listener for pressing Enter in the input field
    usernameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    });
  
    // Reset percentages when the username input changes
    usernameInput.addEventListener('input', () => {
      initialPercentage = null;
      currentPercentage = null;
    });
  
    // === Dark Mode Implementation ===
  
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
  
    // Function to toggle dark mode
    function toggleTheme() {
      const htmlElement = document.documentElement;
  
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        // Change icon to moon (indicating dark mode is off)
        themeIcon.innerHTML = `
          <!-- Moon Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        `;
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        // Change icon to sun (indicating dark mode is on)
        themeIcon.innerHTML = `
          <!-- Sun Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m8.66-8.66h1M4.34 12H3m15.54 4.66l-.7.7M6.16 6.16l-.7.7m12.02 0l.7.7M6.16 17.84l-.7-.7"
          />
        `;
      }
    }
  
    // Event listener for theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
  
    // Check local storage for theme preference on initial load
    (function () {
      const htmlElement = document.documentElement;
      const storedTheme = localStorage.getItem('theme');
  
      if (storedTheme === 'dark') {
        htmlElement.classList.add('dark');
        // Set icon to sun
        themeIcon.innerHTML = `
          <!-- Sun Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m8.66-8.66h1M4.34 12H3m15.54 4.66l-.7.7M6.16 6.16l-.7.7m12.02 0l.7.7M6.16 17.84l-.7-.7"
          />
        `;
      } else {
        htmlElement.classList.remove('dark');
        // Set icon to moon
        themeIcon.innerHTML = `
          <!-- Moon Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        `;
      }
    })();
  });
  