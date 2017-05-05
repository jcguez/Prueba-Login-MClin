(function () {
	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyArNAByPAIBguaIglyEoR6wAl7Z0T0uJfk",
    authDomain: "betalogin-a6226.firebaseapp.com",
    databaseURL: "https://betalogin-a6226.firebaseio.com",
    projectId: "betalogin-a6226",
    storageBucket: "betalogin-a6226.appspot.com",
    messagingSenderId: "843334316340"
  };
  firebase.initializeApp(config);

  // Get de elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
  	// Get email and pass
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();
  	// Sign in
  	const promise = auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));
  });

  // Add sign up event
  btnSignUp.addEventListener('click', e => {
  	// GET email and pass
  	// TODO: Check por real emails
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
  	firebase.auth().signOut();
  });

	// Add a realtime listener
	firebase.auth().onAuthStateChanged( firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not loged in');
			btnLogout.classList.add('hide');
		}

	})

}());