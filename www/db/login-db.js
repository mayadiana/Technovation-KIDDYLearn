const loginForm = document.getElementById("login-form");

async function login(event) {
  event.preventDefault();

  const email = event.target["email"].value;
  const password = event.target["password"].value;

  try {
    let userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    location = "html/home.html";
    // Signed in
  } catch (error) {
    alert(error.message);
  }
}

loginForm.onsubmit = event => login(event);