///////////////////////////////////////////
//                                       //
//              test via fetch           //
//                                       //
///////////////////////////////////////////
/*
fetch('/data/dev/KennethEllebring.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
  .catch(function(error) {
    console.log(error);
});
*/
/*
const firstName = document.querySelector(".fname");
firstName.innerText = `Firstname: ${userJson.firstname}`;
//console.log(firstName);

const lastName = document.querySelector(".lname");
lastName.innerText = `Lastname: ${userJson.lastname}`;
//console.log(lastName);

const discord = document.querySelector(".discord");
discord.innerText = `Discord: ${userJson.discord}`;
//console.log(discord);
*/

////////////////////////// get the info from .json ///////////////////////////////////

import userJson from "/data/dev/KennethEllebring.json" assert { type: "json" }; // Kenneth // importering av json till variabel userJson
/*
import userJson2 from "/data/dev/tsorako.json" assert { type: "json" }; // Karl
import userJson3 from "/data/dev/KungLucas.json" assert { type: "json" }; // Lucas
import userJson4 from "/data/dev/Vadim.json" assert { type: "json" }; // Vadim
import userJson5 from "/data/dev/Metteae.json" assert { type: "json" }; // Mette

import userJson from "/data/public/KennethEllebring.json" assert { type: "json" }; // Kenneth
import userJson2 from "/data/public/tsorako.json" assert { type: "json" }; // Karl
import userJson3 from "/data/public/KungLucas.json" assert { type: "json" }; // Lucas
import userJson4 from "/data/public/Vadim.json" assert { type: "json" }; // Vadim
import userJson5 from "/data/public/Metteae.json" assert { type: "json" }; // Mette
//console.log(userJson);
*/
////////////////////////////***above works***/////////////////////////////////////

///////////////////nodes select and add new info///////////////////////
// Student 1//
const firstName = document.querySelector(".fname"); // variabel med namn firstName som hittar "class fname"
firstName.innerText = `Firstname: ${userJson.firstname}`; /*firstName blir sen en "template string (backticks) 
och byter ut texten i den P taggen mot Firstname: och data från object infon från userJason variablen.
*/
//console.log(firstName);

const lastName = document.querySelector(".lname");
lastName.innerText = `Lastname: ${userJson.lastname}`;
//console.log(lastName);

const discord = document.querySelector(".discord");
discord.innerText = `Discord: ${userJson.discord}`;
//console.log(discord);
/*
//////////////////// Student 2///////////////////////
const firstName2 = document.querySelector(".fname2");
firstName2.innerText = `Firstname: ${userJson2.firstname}`;
//console.log(firstName);

const lastName2 = document.querySelector(".lname2");
lastName2.innerText = `Lastname: ${userJson2.lastname}`;
//console.log(lastName);

const discord2 = document.querySelector(".discord2");
discord2.innerText = `Discord: ${userJson2.discord}`;
//console.log(discord);

//////////////////// Student 3///////////////////////
const firstName3 = document.querySelector(".fname3");
firstName3.innerText = `Firstname: ${userJson3.firstname}`;
//console.log(firstName);

const lastName3 = document.querySelector(".lname3");
lastName3.innerText = `Lastname: ${userJson3.lastname}`;
//console.log(lastName);

const discord3 = document.querySelector(".discord3");
discord3.innerText = `Discord: ${userJson3.discord}`;
//console.log(discord);

//////////////////// Student 4///////////////////////
const firstName4 = document.querySelector(".fname4");
firstName4.innerText = `Firstname: ${userJson4.firstname}`;
//console.log(firstName);

const lastName4 = document.querySelector(".lname4");
lastName4.innerText = `Lastname: ${userJson4.lastname}`;
//console.log(lastName);

const discord4 = document.querySelector(".discord4");
discord4.innerText = `Discord: ${userJson4.discord}`;
//console.log(discord);

//////////////////// Student 5///////////////////////
const firstName5 = document.querySelector(".fname5");
firstName5.innerText = `Firstname: ${userJson5.firstname}`;
//console.log(firstName);

const lastName5 = document.querySelector(".lname5");
lastName5.innerText = `Lastname: ${userJson5.lastname}`;
//console.log(lastName);

const discord5 = document.querySelector(".discord5");
discord5.innerText = `Discord: ${userJson5.discord}`;
//console.log(discord);
*/
