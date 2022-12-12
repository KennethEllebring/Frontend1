# 🅟🅡🅞🅙🅔🅒🅣 - 🅺 🅴 🅽 🅽 🅴 🆃 🅷

## Problem definition

### Basic

    A program that sorts different things from provided information and display on a homepage.

Solution

    1. Build a homepage.

    2. With the help of code, get provided info.

    3. Use the code to sort said info by your choice.

    4. Show that info on the homepage.

---

### Intermediate

    A program that obtains information, sets it to a homepage and be able to sort it by a list of different choices.

### Solution

    1. Build a homepage.

    2. Get the folder with info files from data/dev/users into a code.

    3. Sort the info by users choice, with said code.

    4. Show the sorted info on homepage.

---

### Technical

    A program made by javascript that take ".json" files and converts their object list to an array, sort that array after specified parameter and also present the specified data in a HTML-file.

### Solution

    1. Construct a HTML-document and import Javascript into it.

    2. Fetch the folder with .json files from data/dev/users into a javascript-file.

    3. Sort objects after chosen parameter/attribute, with a sorting function.

    4. Display sorted list in the HTML-document by printing a table with all data chosen to the DOM.

    5. Clear list and restart at number "3."

---

## How it works

    Use this commands in the terminal of your VisualStudioCode to load all background nodes needed to run program:

    ---> npm install <---

![alt text](/media/graphic/npm_install.jpg)

    After its loaded use this command in your terminal to start program:

    ---> npm run server <---

![alt text](/media/graphic/npm_run_server.jpg)

    This starts a server for the program to be visualized locally on your computer, if it not starts browser automatically:

    Press ctrl and click the link <http://localhost:3000>

![alt text](/media/graphic/npm_run_server2.jpg)

    This starts up in your browser:

![alt text](/media/graphic/indexHTML.jpg)

    Choose sorting in the dropdown menu and click "Sort" and you will get att sorted table of the content that is from an interview from X amount of people.

![alt text](/media/graphic/indexHTMLsort.jpg)

    If you want to add more interviews to the table, just add more .json files to the "data/dev/users" folder, it doesn't matter what order the properties in the .json file comes in, just be sure that it has at least the right property with the correct value, eg. firstname : "Elvis", lastname : "Presley".

---

![alt text](/media/graphic/addmore.jpg)

---

## Conclusion

I think this "app/program" could be used by many different kind of search sites where you want to compare products or things against one and another for example, prisjakt where you maybe want to sort a list of items by price or if you are searching for a specific trait.

Comments are added in both the (javascript) script.js and (HTML) index.html files if other developers need guidance to handle or care for the code, folder to this files are: "www/dev".

This was a very fun and challenging assignment where i really had to use all the skills we have learned over the past few week, coupled with a serious amount of time googling things that were unclear, and i think it turned out pretty good.

---

### Authored by "Kenneth Ellebring 2022"
