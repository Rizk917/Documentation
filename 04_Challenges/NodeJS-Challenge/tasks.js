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
    hello(text.replace("\n", "").substring(6));
  } else if (text === "list\n") {
    list();
  } // calling list function
  else if (text === "add\n") {
    console.log("Error nothing after add command!");
  } // calling error for add
  else if (text.substring(0, 3) === "add") {
    add(text.replace("\n", "").substring(4));
  } // calling add
  else if (text === "remove\n") {
    remove(arr.length - 1);
  } // to remove last item in list
  else if (text.trim().substring(7) > arr.length - 1) {
    console.log("Number does not exist"); // better remove
  } else if (text.substring(0, 6) === "remove") {
    remove(text.trim().substring(7));
  } // to remove specific item from list
  else if (text === "edit\n") {
    console.log("Error nothing to edit");
  } //edit error
  else if (text.substring(0, 4) === "edit") {
    text.replace("\n", "");
    const editarr = text.split(" ");
    if (!isNaN(editarr[1])) {
      let batata = editarr.slice(2).join(" ");
      edit(editarr[1], batata); // to edit array at specific part
    } else {
      text.replace("\n", "");
      edit(arr.length - 1, text.substring(4));
    } // to edit array last
  } else if (text === "check\n") {
    console.log("error!");
  } else if (text.substring(0, 5) === "check") {
    // check task
    check(text.trim().substring(6));
  } else if (text === "uncheck\n") {
    console.log("error!");
  } else if (text.substring(0, 7) === "uncheck") {
    // check task
    unCheck(text.trim().substring(8));
  } else {
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
    " You can use the following commands:\nHello + 'name' for greetings\nexit ot quit to close the app\nhelp to get all options \nadd to add item to list \nremove to remove last item or put number for specific item \nlist to check the list\n use check/uncheck with the number of item in the list to mark as done or not done"
  );
}
//new hello function
function hello(newName) {
  console.log("hello " + newName + "!");
}
const arr = ["eat batata", "drink pepsi", "wash hands"];

//list function
function list() {
  if (arrCheck[arr.length - 1] === undefined) {
    arrCheck[arr.length - 1] = "[]";
  }
  for (let x = 0; x < arr.length; x++) {
    console.log(x + "." + arrCheck[x] + arr[x]);
  }
}
//add function to add items to list
function add(value) {
  arr.push(value);
}
// to remove item from list
function remove(value) {
  arr.splice(value, 1);
}
//edit function
function edit(value, text) {
  arr[value] = text;
}

const arrCheck = [];
for (let i = 0; i < arr.length; i++) {
  arrCheck[i] = "[]";
}
//check
function check(index) {
  if (index == "\n") {
    console.log("Error");
  } else arrCheck[Number(index)] = arrCheck[Number(index)].replace("[]", "[✓]");
}
function unCheck(index) {
  arrCheck[Number(index)] = arrCheck[Number(index)].replace("[✓]", "[]");
}
