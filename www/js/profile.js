import "../db/config.js";

const logOutButton = document.querySelector('.logout');
const firstName = document.querySelector('.firstName input');
const lastName = document.querySelector('.lastName input');
const email = document.querySelector('.email input');
const birthday = document.querySelector('.birthday input');
const editButton = document.querySelector('.editButton > button');

firebase.auth().onAuthStateChanged(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) location = '../index.html';
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    email.value = user.email;
    birthday.value = user.birthday;
    sessionStorage.removeItem('user');

    logOutButton.onclick = () => {
        Swal.fire({
            heightAuto: false,
            title: 'Ești sigur că vrei să te deconectezi?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7C95E0',
            cancelButtonColor: '#E092AA',
            confirmButtonText: 'Deconectează-mă!',
            cancelButtonText: 'Nu mă deconecta.'
        }).then((result) => {
            if (result.isConfirmed) {
                firebase.auth().signOut();
                sessionStorage.clear();
                setTimeout(() => location = '../index.html', 1000);
            }
        })
    }

    editButton.onclick = () => {
        firebase.firestore().collection('users').doc(user.uid).update({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            birthday: birthday.value,
        }).then(() => {
            location = 'profile.html'
        }).catch(e => {
            alert('An error occured')
        })
    }
});