import "../db/config.js";

export function getLoggedUser() {
    return new Promise((resolve, error) => {
        let userString = sessionStorage.getItem('user');
        if (userString) {
            resolve(JSON.parse(userString));
            return;
        }
        firebase.auth().onAuthStateChanged(async e => {
            if (!e) return resolve(null);
            try {
                let res = await firebase.firestore().collection('users').doc(e.uid).get();
                let user = res.data();
                sessionStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            }
            catch (err) {
                error(err);
            }
        })
    });
}