import { getLoggedUser } from '../js/Utils.js';

const loginForm = document.getElementById("login-form");

async function login(event) {
  event.preventDefault();

  const email = event.target["email"].value;
  const password = event.target["password"].value;

  try {
    let userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    // Signed in
    let user = await getLoggedUser();
  } catch (error) {
    alert(error.message);
  }
}

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    let user = await getLoggedUser();
    try {
        Node.Plugins.SplashScreen.hide()
    } catch {}
}
});

loginForm.onsubmit = (event) => login(event);