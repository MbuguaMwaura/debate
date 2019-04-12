(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDCKUWhdRIDgK4uM412c2x5MIFTOjsEqg8",
        authDomain: "authentication-c8f7f.firebaseapp.com",
        databaseURL: "https://authentication-c8f7f.firebaseio.com",
        projectId: "authentication-c8f7f",
        storageBucket: "",
        messagingSenderId: "315873449998"
    };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    }); 

    btnSignU.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();   

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));


    }); 

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            //window.location = "index.html";
            btnLogout.classList.remove('hide');
            event.preventDefault();
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
            //window.location = "test2.html"
            event.preventDefault();
        }
    });
}());