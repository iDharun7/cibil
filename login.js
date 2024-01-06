const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to another page upon successful login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      errorMessage.innerText = 'Wrong password or email.';
    });
});
