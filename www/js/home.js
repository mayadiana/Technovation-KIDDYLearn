import { getLoggedUser } from "../js/Utils.js";

const nameLabel = document.querySelector('.nameLabel');

getLoggedUser().then(user => {
    if (!user) return location = "../index.html";
    nameLabel.innerText = user.firstName + ' ' + user.lastName;
});
