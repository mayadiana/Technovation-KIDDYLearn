import "../../db/config.js";

const logOutButton = document.querySelectorAll('.topContainer img');
const [ firstName, lastName] = document.querySelectorAll('.fullName input');
const email = document.querySelector('.email input');
const birthday = document.querySelector('.birthday input');
const editButton = document.querySelector('.editButton > button');

(async() => {
    const user = await firebase.auth().currentUser;
    if (!user) location = '../../index.html';
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    email.value = user.email;
    birthday.value = user.birthday;
    sessionStorage.removeItem('user');

    logOutButton.onclick = () => {
        firebase.auth().signOut();
        sessionStorage.clear();
        setTimeout(() => location = '../../index.html', 1000);
    }
    
    editButton.onclick = () => {
        firebase.firestore().collection('users').doc(user.uid).update({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            birthday: birthday.value,
        }).then(() => {
            location = 'home.html'
        }).catch(e => {
            alert('An error occured')
        })
    }
})();