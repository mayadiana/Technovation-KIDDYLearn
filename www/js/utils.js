import "../db/config.js";

export const getLoggedUser = async () => {
    let user = sessionStorage.getItem('user');
    if (user) return JSON.parse(user);
    return await new Promise(resolve => {
        firebase.auth().onAuthStateChanged(async e => {
            if (!e) return resolve(null);
            let res = await firebase.firestore().collection('users').doc(e.uid).get();
            let user = res.data();
            sessionStorage.setItem('user', JSON.stringify(user));
            resolve(user);
        })
    });
}