//USERS DATA
const USERS = {
    "kenneth": { dataPath: "/data/dev/KennethEllebring.json", data: {} },
    "lucas": { dataPath: "/data/dev/KungLucas.json", data: {} },
    "mettae": { dataPath: "/data/dev/Metteae.json", data: {} },
    "vadim": { dataPath: "/data/dev/Vadim.json", data: {} },
    "karl": { dataPath: "/data/dev/tsorako.json", data: {} }
}

//USING FETCH
const fetchUserData = async (dataPath) => {
    const response = await fetch(dataPath);
    const object = await response.json();
    return object;
}

//WRITE TO DOM

let selectedUser = "karl";
const usernames = Object.keys(USERS);

const updateElements = async (user) => {
    let tempUserData = { ...user.data };
    if (!Object.keys(user.data).length) {
        const object = await fetchUserData(user.dataPath);
        tempUserData = object;
        user.data = object;
    }
    console.log(user);

    const userElements = document.getElementById("userElem").children;
    userElements[0].innerText = tempUserData.firstname + " " + tempUserData.lastname;
    userElements[1].innerText = "Discord " + tempUserData.discord;
    userElements[2].innerText = "Github " + tempUserData.github;
    userElements[3].innerText = "Color " + tempUserData.personalityType;
    userElements[4].innerText = "Birthyear " + tempUserData.birthYear;
    if (typeof tempUserData.zodiac === "object") {
        userElements[5].innerText = "Zodiac ";
        Object.entries(tempUserData.zodiac).forEach(([k, v]) => {
            userElements[5].innerText += " | " + k + ": " + v + " | ";
        })
    } else {
        userElements[5].innerText = "Zodiac " + tempUserData.zodiac;
    }
}

const nextUser = () => {
    //is the next index assigned? if not select the first user
    const potentialNextUser = usernames.indexOf(selectedUser) + 1;
    if (usernames[potentialNextUser]) {
        selectedUser = usernames[potentialNextUser];
    } else {
        selectedUser = usernames[0];
    }
    updateElements(USERS[selectedUser]);
}

const prevUser = () => {
    //is the previous index assigned? if not select the last user
    const potentialNextUser = usernames.indexOf(selectedUser) - 1;
    if (usernames[potentialNextUser]) {
        selectedUser = usernames[potentialNextUser];
    } else {
        selectedUser = usernames[usernames.length - 1];
    }
    updateElements(USERS[selectedUser]);
}

updateElements(USERS.karl);