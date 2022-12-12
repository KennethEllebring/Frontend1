//const pers = require('../../../../data/dev/Metteae.json');
//import userJson from "../../../../data/dev/Metteae.json" assert { type: "json" };
//const
//import {mettes.json} from `"../../../../data/dev/Metteae.json"`assert { type: "json" };

//console.log(1);

//import "/Users/mette/skola/javascript-frontend1/DOM/frontend1-javascript/secrets.json" assert { type: "json" };

fetch("../../../../data/dev/Metteae.json")
  .then((response) => {
    return response.json();
  })
  .then((uppgifter) => {
    alert(uppgifter.zodiac.element + " " + uppgifter.zodiac.symbol);
    document.body.innerHTML +=
      /*uppgifter.firstname +
      " " +
      uppgifter.lastname +
      " " +*/
      uppgifter.zodiac.stone;
    document.getElementById("demo").innerHTML = uppgifter.firstname + " " + uppgifter.lastname;
  });
