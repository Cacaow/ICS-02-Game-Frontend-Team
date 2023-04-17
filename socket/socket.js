/*
This code connects to the server and sets the socket global variable using the io function from the 'socket.io-client' module.
*/

// File and function imports
import { getGlobal, setGlobal } from '../globals.js';
import loginFail from './loginFail.js';
import loginSucceed from './loginSucceed.js';

// Connect to the server and set the socket global variable
const socket = io("https://ics-02-game-studio-backend-team.ics3uc-2023s-02.repl.co");
setGlobal('socket', socket);

// Actions that happen when the connection is established
socket.on("connect", () => {
  console.log("Connected to server");
  // Identify with server
  socket.emit("ident", "client");
});

// When a message is received from the server
socket.on("message", (message) => {
  console.log("Received message:", message);
});

// When a login fails, receive a message from the server
socket.on("loginFailed", (message) => {
  loginFail(message);
});

// When a login succeeds, fetch the gameHTML and start the game
socket.on("loginSucceed", (message) => {
  loginSucceed(message);
});
