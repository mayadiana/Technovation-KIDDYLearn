import { getLoggedUser } from "../js/utils.js";

const nameLabel = document.querySelector('.nameLabel');

getLoggedUser().then(user => {
    if (!user) return location = "../index.html";
    nameLabel.innerText = user.firstName + ' ' + user.lastName;
})
.catch(err => {
    console.log(err);
});