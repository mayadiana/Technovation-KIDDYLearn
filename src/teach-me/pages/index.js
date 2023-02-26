import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { app } from '../services/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class Home extends React.Component {
    async login(event) {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const auth = getAuth();
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
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
                <form id="login-form" class="login-form" onSubmit={e => this.login(e)}>
                    <div class="form-group auth-container">
                        <label class="auth-label" htmlFor="user-email">Email</label>
                        <input class="auth-input" id="user-email" name="email" type="email" required placeholder='exemplu: ioan.popa@gmail.com' />
                    </div>
                    <div class="form-group auth-container">
                        <label class="auth-label" htmlFor="user-password">Parola</label>
                        <input class="auth-input" id="user-password" name="password" type="password" required />
                    </div>
                    <div class="form-group auth-container">
                        <button class="btn btn-primary submit-button" type="submit">Conectează-te</button>
                    </div>
                    <div class="form-group auth-container">
                        <p class="auth-label">Nu ai încă cont?&nbsp;<Link href="/sign-up">Înregistrează-te</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}
