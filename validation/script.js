function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    resetErrors();
    var hasErrors = false;
    if (fullName.length < 5) {
      showError('fullNameError', 'Name must be at least 5 characters long');
      hasErrors = true;
    }
    if (!email.includes('@')) {
      showError('emailError', 'Enter a valid email address');
      hasErrors = true;
    }
    if (phone.length !== 10 || phone === '123456789') {
      showError('phoneError', 'Enter a valid 10-digit phone number');
      hasErrors = true;
    }
    if (password.length < 8 || password === 'password' || password === fullName) {
      showError('passwordError', 'Password must be at least 8 characters long and not be "password" or the same as your name');
      hasErrors = true;
    }
    if (password !== confirmPassword) {
      showError('confirmPasswordError', 'Passwords do not match');
      hasErrors = true;
    }
    if (!hasErrors) {
      alert('Form submitted successfully!');
    }
  }
  
  function showError(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = errorMessage;
    errorElement.style.display = 'block';
  }
  
  function resetErrors() {
    var errorElements = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].style.display = 'none';
    }
  }
  