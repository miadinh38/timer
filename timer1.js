
const setAlarm = function(seconds) {
  
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`${seconds} seconds`);
  }, seconds * 1000);
};

//get command line arguments starting from index 2
const args = process.argv.slice(2);

if (args.length === 0) {
  return null;
} else {
  args.forEach(arg => {
    if (!isNaN(arg) && arg > 0) {
      setAlarm(arg);
    } else if (isNaN(arg)) {
      console.log(`Ignoring non-numeric argument: ${arg}`);
    } else {
      console.log(`Ignoring negative argument: ${arg}`);
    }
  });
}