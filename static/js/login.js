document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
  
    // You can replace this alert with a login API call
    alert(`Username: ${username}\nPassword: ${password}`);
  });
  
