const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to another page upon successful signup (optional)
      window.location.href = 'login.html';
    })
    .catch((error) => {
      errorMessage.innerText = error.message;
    });
});
