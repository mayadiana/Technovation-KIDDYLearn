import firebase from "../db/config.js";

const registerForm = document.getElementById("register-form");

function RegisterUser(event) {
    event.preventDefault();
    const lastName = event.target["lastName"].value;
    const firstName = event.target["firstName"].value;
    const email = event.target["email"].value;
    const password = event.target["password"].value;
    const confirmPassword = event.target["confirm-password"].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
        // Signed in
        let user = userCredential.user;
        firebase.firestore().collection("users").set({
            lastName: lastName,
            firstName: firstName,
            email: email,

        }).then(() => {
            location = "home.html";
        });
   }).catch(error => {
      loading.hide();
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
   });
}

registerForm.onsubmit = location.RegisterUser;