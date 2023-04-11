//import { getLoggedUser } from '../js/utils.js'

const loginForm = document.getElementById("login-form");

async function login(event) {
    event.preventDefault();

    const email = event.target["email"].value;
    const password = event.target["password"].value;

    try {
        let userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        let usersResult = await firebase.firestore().collection('users').where('email', '==', userCredential.user.email).get();
        if (!usersResult.empty) {
            sessionStorage.setItem('user', JSON.stringify(usersResult.docs[0].data()));
        }
        location = "html/home.html";
        // Signed in
    } catch (error) {
        alert(error.message);
    }
}

/*
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    let user = await getLoggedUser();
    if (user) location = "html/home.html";
  }
});
*/

loginForm.onsubmit = event => login(event);