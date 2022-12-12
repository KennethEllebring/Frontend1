fetch("http://localhost:3000/api/users/") // gets all .json files from said local address
  .then((response) => (response = response.json()))
  .then((allPeople) => {
    const elForm = document.querySelector("#formReg"); // creates an element that waits for user to click on sort button to activate function showPeople()
    const elUserChoice = document.querySelector("#userChoice"); // creates an element that takes info from chosen alternative in dropdown menu from DOM and send it to variable on row 17
    const elOutput = document.querySelector("#output"); // creates an element that takes info from variable on row 20 and sends result back to DOM

    function resetTable() {
      // function to remove all JS. made tables
      // takes created element from DOM named "table" and deletes everything up to "firstChild"(first created element)
      let deleteTable = document.getElementById("table");
      while (deleteTable.firstChild) {
        deleteTable.removeChild(deleteTable.firstChild);
      }
    }

    function showPeople(event) {
      let choice = elUserChoice.value; // takes "value" from elUserChoice and gives "choice" that data
      elOutput.textContent = "You choose: " + choice; // sends info back to the DOM --> "You choose: choice"

      switch (choice) {
        /* case statement takes value from elUserChoice and compare it to case statements and executes sorting function under corresponding case,
      takes users from fetch import on row 1 - 3 and takes 2 arguments, compares arg1(p1) to arg2(p2) and if p1 is bigger than p2 moves it up the list, also ignores
      uppercase/lowercase(if someone by mistake used a small letter in their name or other) and if p1 is smaller than p2 moves it down the list, else it doesn't do anything*/
        case "Group sorting":
          allPeople.sort((p1, p2) => (p1.belongsTo.toUpperCase() > p2.belongsTo.toUpperCase() ? 1 : p1.belongsTo.toUpperCase() < p2.belongsTo.toUpperCase() ? -1 : 0));
          resetTable(); // call function from row 8
          break;
        case "Name sorting":
          allPeople.sort((p1, p2) => (p1.firstname.toUpperCase() > p2.firstname.toUpperCase() ? 1 : p1.firstname.toUpperCase() < p2.firstname.toUpperCase() ? -1 : 0));
          resetTable();
          break;
        case "Discord sorting":
          allPeople.sort((p1, p2) => (p1.discord.toUpperCase() > p2.discord.toUpperCase() ? 1 : p1.discord.toUpperCase() < p2.discord.toUpperCase() ? -1 : 0));
          resetTable();
          break;
        case "Github sorting":
          allPeople.sort((p1, p2) => (p1.github.toUpperCase() > p2.github.toUpperCase() ? 1 : p1.github.toUpperCase() < p2.github.toUpperCase() ? -1 : 0));
          resetTable();
          break;
        case "Personality sorting":
          allPeople.sort((p1, p2) => (p1.personalityType.toUpperCase() > p2.personalityType.toUpperCase() ? 1 : p1.personalityType.toUpperCase() < p2.personalityType.toUpperCase() ? -1 : 0));
          resetTable();
          break;
        /* if we want to add more sorting options just change case "new sorting" to what you want to sort,
         "newkey" to sorting value and add a new choice in html form */
        // case "new sorting":
        //   allPeople.sort((p1, p2) => (p1.newkey.toUpperCase() > p2.newkey.toUpperCase() ? 1 : p1.newkey.toUpperCase() < p2.newkey.toUpperCase() ? -1 : 0));
        //   resetTable();
        //   break;
        default:
          resetTable();
          break;
      }
      // gets the element "table" from the DOM and gives it to variable table
      let table = document.getElementById("table");
      /*Builds up the whole table structure from how many "person" it is in "allPeople" and puts all values from the each key that is chosen*/
      for (let person of allPeople) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = person.belongsTo;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = `${person.firstname} ${person.lastname}`;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = person.discord;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = person.github;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = person.personalityType;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = person.skills;
        tr.appendChild(td6);
        /* add another cell with the correct property from .json file instead of the "newproperty" to show it on the table, also add another "th" in the index.html file*/
        // let td7 = document.createElement("td");
        // td7.textContent = person.newproperty;
        // tr.appendChild(td7);

        table.appendChild(tr);
      }

      event.preventDefault(); // Used to not reload website automatically on form choice
    }

    elForm.addEventListener("submit", showPeople, false); // starts function showPeople() when users clicks button "Sort"
  });

// tries to close browser window, only works if this is the first window opened.
function close_window() {
  if (confirm("Close Window?")) {
    window.close();
  }
}
