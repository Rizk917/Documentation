/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  //added exit
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "help\n") {
    help(); // calling help function
  } else if (text.substring(0, 5) === "hello") {
    let batata = hello(text.replace("\n", "").substring(6));
  } else if (text === "list\n") {
    list();
  } // calling list function
  else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
// function hello() {
//   console.log("hello!");
// }

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Mhmd Rizk");
//help command
function help() {
  console.log(
    " You can use the following commands:\nHello + 'name' for greetings\nexit ot quit to close the app\nhelp to get all options "
  );
}
//new hello function
function hello(newName) {
  console.log("hello " + newName + "!");
}
const arr = ["eat batata", "drink pepsi", "wash hands"];

//list function
function list() {
  for (let x = 0; x < arr.length; x++) {
    console.log(x + "." + arr[x]);
  }
}
