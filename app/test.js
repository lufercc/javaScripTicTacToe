/**
 * Created by luiscachi on 7/24/2015.
 */
var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? :');
console.log('Hi ' + userName + '!');

// Handle the secret text.
var favFood = readlineSync.question('What is your favorite food? :', {
    hideEchoBack: true
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');