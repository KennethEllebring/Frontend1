////////// get the info from .json ////////////
//import userJson from "/data/dev/KennethEllebring.json" assert { type: "json" };
import userJson from "/data/dev/KungLucas.json" assert { type: "json" };
//console.log(userJson);
console.log("hello world");

///////////////////Create variable and query data from KungLucas///////////////////////
const firstName = document.querySelector(".fname");
firstName.innerText = userJson.firstname;

const lastName = document.querySelector(".lname");
lastName.innerText = userJson.lastname;
//console.log(lastName);

const discord = document.querySelector(".discord");
discord.innerText = userJson.discord;
//console.log(discord);
