var user = 'Customer';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Rate these cars for a chance of winning one of them!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;