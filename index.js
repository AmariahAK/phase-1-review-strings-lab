// Define currentUser variable
const currentUser = 'Grace Hopper';

// Define welcomeMessage using concatenation and ensure it ends with an exclamation point
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// Define excitedWelcomeMessage using .toUpperCase() and ensure it ends with an exclamation point
const excitedWelcomeMessage = welcomeMessage.toUpperCase() + '!';

// Define shortGreeting with first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
