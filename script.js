const form = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.classList.toggle('bi-eye-fill');
      togglePassword.classList.toggle('bi-eye-slash-fill');
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = form.username.value.trim();
      const password = form.password.value.trim();

      if (!username) {
        alert('Please enter your username.');
        form.username.focus();
        return;
      }
      if (!password) {
        alert('Please enter your password.');
        form.password.focus();
        return;
      }

      alert(`Welcome, ${username}! This is a luxury login demonstration.`);
      form.reset();
    });