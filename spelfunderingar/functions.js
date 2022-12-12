const prompt = require("prompt-sync")();
choice = true;
//const startMenu = export()
function startGame() {
  userName = prompt("Start game by entering your name: ");
  console.log(`Welcome ${userName} create you character`);

  while (choice === true) {
    userClass = parseInt(prompt("Press 1 for Warrior, or 2 for Mage: "));
    if (userClass === 1) {
      console.log("You choose Warrior");
      choice = false;
      userClass = "Warrior";
      stats = { strength: 5, magic: 1, stamina: 4 };
    } else if (userClass === 2) {
      console.log("You choose Mage");
      choice = false;
      userClass = "Mage";
      stats = { magic: 7, strength: 1, stamina: 2 };
    } else {
      console.log("Wrong input try again ");
    }
  }
}

startGame();

user = { name: userName, class: userClass, stats: stats };

//console.log(userName)
//console.log(userClass)
console.log(user);
