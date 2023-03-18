import firebase from "../db/config.js";

const registerForm = document.getElementById("register-form");

async function RegisterUser(event) {
    event.preventDefault();
    const lastName = event.target["lastName"].value;
    const firstName = event.target["firstName"].value;
    const email = event.target["email"].value;
    const password = event.target["password"].value;
    const confirmPassword = event.target["confirm-password"].value;
    const birthday = event.target["birthday"].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        let userCredential = await firebase.auth()
            .createUserWithEmailAndPassword(email, password);
        // Signed in
        let user = userCredential.user;
        let usersCollection = firebase.firestore().collection("users");
        if (usersCollection) {
            
            await usersCollection.add({
                lastName: lastName,
                firstName: firstName,
                email: email,
                birthday: birthday,
            });
            
        }
        location = "home.html";

    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    }
}

registerForm.onsubmit = RegisterUser;