/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
  socket: [],
  canvasWidth: 600,
  canvasHeight: 600,
  ctx: [],
  playerposition: { "x": 300, "y": 300, "width": 50, "height": 50 },
  login: false,
  username: "",
  element: "Water",
  character: "Knight",
  timeleft: 120000,
  betweenrounds: false,
  ingameleaderboard: [
    { "username": "user1", "score": 0 },
    { "username": "user2", "score": 0 },
    { "username": "user3", "score": 0 },
  ],
  treasure: [],
  mapWidth: 1280,
  mapLength: 1920,
  tileSize: 32,
  characters: [],
  speed: 4,
  userMap: [],
  myscore: 0,
  userdata: [],
  userstats: {
    username: 'test',
    type: 'warrior',
    top_score: 290811,
    total_points: 2389901,
    historyCount: 19
  }
};

// Define a function to set a global variable
export function setGlobal(name, value) {
  //console.log(`Setting global variable '${name}' to '${value}'`);
  globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
  //console.log(`Getting global variable '${name}': '${globals[name]}'`);
  return globals[name];
}

// Popup display

// help button variables assigned to html div
var myButton = document.getElementById("myButton");
var popup = document.getElementById("popup");

// when button clicked, help text will appear
myButton.onclick = function () {
  popup.style.display = "block";
}

//if escape key pressed, help text is exited
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    popup.style.display = "none";
  }
};

//if pressed of screen, text help dissapears
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}