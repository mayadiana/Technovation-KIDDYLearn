import Head from 'next/head';
import Link from 'next/link';
import firebase from '../services/firebaseConfig'

export default class Home extends React.Component {
    async login(event) {
        event.preventDefault();

        const email = event.target["email"].value;
        const password = event.target["password"].value;

        try {
            let userCredential = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            // Signed in
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Teach Me!</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div class="topContainer">
                    <p class="welcome-text">Bine ai revenit!</p>
                </div>
                <form id="login-form" class="login-form" onSubmit={login}>
                    <div class="form-group AuthContainer">
                        <label class="AuthLabel" for="user-email">Email</label>
                        <input id="user-email" name="email" type="email" class="baseInput" />
                    </div>
                    <div class="form-group AuthContainer">
                        <label class="AuthLabel" for="user-password">Parola</label>
                        <input id="user-password" name="password" type="password" class="baseInput" />
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link class="btn btn-primary smallButton" href="/home">Conectează-te</Link>
                    </div>
                    <p class="text1">Nu ai cont deja?</p>
                    <Link class="text1" href="/sign-up">Înregistrează-te</Link>
                </form>
            </div>
        )
    }
}
