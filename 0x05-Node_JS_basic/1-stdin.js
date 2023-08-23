process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Remove newline character

  if (input === 'exit') {
    console.log('This important software is now closing');
    process.exit();
  } else {
    console.log(`Your name is: ${input}`);
  }
});