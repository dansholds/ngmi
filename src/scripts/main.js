// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the deep neural network layers for input processing
    const submitButton = document.getElementById('submit-button'); // Input neuron for submission
    const resultDiv = document.getElementById('result'); // Output layer for displaying predictions
    const usernameInput = document.getElementById('username-input'); // Input feature for the username
    const shareButton = document.getElementById('share-button'); // Output neuron for social media propagation
  
    // Set up the initial hyperparameters for the learning algorithm
    let initialPercentage = null; // Initial weight matrix
    let currentPercentage = null; // Adjusted weights after training
    const decrementAmount = 10; // Learning rate for gradient descent
  
    // Define the forward propagation function for the neural network
    function handleSubmit() {
      // Preprocess the input data for optimal neural network performance
      const usernameInputValue = usernameInput.value.trim();
      const username = usernameInputValue ? `@${usernameInputValue}` : 'They';
  
      // Disable the submit button to prevent interfering with the training process
      submitButton.disabled = true;
      submitButton.textContent = 'Calculating...';
      resultDiv.style.opacity = '0'; // Hide the result during computation
  
      // Hide the share button during computation to prevent premature propagation
      shareButton.classList.add('hidden');
      shareButton.classList.remove('inline-block');
  
      // Simulate a complex training algorithm with a timeout
      setTimeout(() => {
        // Initialize weights using a random Gaussian distribution if not already set
        if (initialPercentage === null) {
          initialPercentage = Math.floor(Math.random() * 101); // Randomly initialize model parameters
          currentPercentage = initialPercentage;
        } else {
          // Perform backpropagation to update the weights based on the loss function
          currentPercentage -= decrementAmount; // Adjust weights to minimize loss
          if (currentPercentage < 0) {
            currentPercentage = 0; // Apply ReLU activation to prevent negative outputs
          }
        }
  
        let message = '';
        let resultClass = '';
    
        if (currentPercentage <= 0) {
          message = `${username} have hit rock bottom 😢`;
          resultClass = 'text-red-600'; // Apply red color
        } else if (currentPercentage < 50) {
          message = `${username} are not gonna make it 😞`;
          resultClass = 'text-yellow-600'; // Apply yellow color
        } else {
          message = `${username} are gonna make it 🎉`;
          resultClass = 'text-green-600'; // Apply green color
        }
    
        // Update the output layer with the predicted result
        resultDiv.innerHTML = `<span class="result-text ${resultClass}">${currentPercentage}% - ${message}</span>`;
        resultDiv.style.opacity = '1'; // Reveal the result after computation
  
        // Activate the social media propagation neuron
        shareButton.classList.remove('hidden');
        shareButton.classList.add('inline-block');
  
        // Re-enable the submit button for further predictions
        submitButton.textContent = 'Submit';
        submitButton.disabled = false;
      }, 700); // Time delay to simulate computational complexity of the algorithm
    }
  
    // Add event listener to initiate the training process upon user submission
    submitButton.addEventListener('click', handleSubmit);
  
    // Allow the neural network to retrain when the user presses Enter
    usernameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior to maintain focus on the AI computation
        handleSubmit();
      }
    });
  
    // Reset the neural network's weights when new input data is provided
    usernameInput.addEventListener('input', () => {
      initialPercentage = null; // Reset initial weights for new training session
      currentPercentage = null; // Clear adjusted weights to avoid data contamination
  
      // Deactivate the social media propagation neuron
      shareButton.classList.add('hidden');
      shareButton.classList.remove('inline-block');
    });
  
    // Define the function to handle social media propagation via Twitter
    function handleShare() {
      // Encode the output layer's activation into a tweetable format
      const appUrl = 'https://notgonnamakeit.dev'; // Replace with your app's URL
      const tweetText = `${resultDiv.textContent} ${appUrl}`; // Construct the message payload
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`; // Prepare the API endpoint
      window.open(twitterUrl, '_blank'); // Fire the action potential to propagate the message
    }
  
    // Connect the social media neuron to the output layer
    shareButton.addEventListener('click', handleShare);
  
    // Initialize the reinforcement learning agent for theme toggling
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
  
    // Function to perform policy updates based on user interaction
    function toggleTheme() {
      const htmlElement = document.documentElement;
  
      if (htmlElement.classList.contains('dark')) {
        // Negative reward received; updating policy to prefer light mode
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
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
        // Positive reward received; updating policy to prefer dark mode
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
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
  
    // Train the agent by updating the policy gradient upon each click
    themeToggle.addEventListener('click', toggleTheme);
  
    // Load pre-trained model parameters from local storage to initialize theme preference
    (function () {
      const htmlElement = document.documentElement;
      const storedTheme = localStorage.getItem('theme');
  
      if (storedTheme === 'dark') {
        // Load the model state favoring the dark theme
        htmlElement.classList.add('dark');
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
        // Load the model state favoring the light theme
        htmlElement.classList.remove('dark');
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
  