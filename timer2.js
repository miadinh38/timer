const setTimer = function(seconds) {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(() => {
    process.stdout.write('\x07'); // Make a beep sound
    console.log(`Timer for ${seconds} seconds is done!`);
  }, seconds * 1000);
};

process.stdin.setEncoding('utf8');

console.log('Interactive Timer');
console.log('Press b for immediate beep or enter a number between 1 and 9 to set a timer.');

process.stdin.on('data', input => {
  input = input.trim();
  
  if (input === 'b') {
    process.stdout.write('\x07'); // Make a beep sound
  } else if (!isNaN(input) && parseInt(input) >= 1 && parseInt(input) <= 9) {
    setTimer(parseInt(input));
  } else if (input === 'exit') {
    console.log('Thanks for using me, ciao!');
    process.exit(0);
  } else {
    console.log('Invalid input. Press b for immediate beep, enter a number between 1 and 9, or type "exit" to quit.');
  }
});
