document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    
    loginButton.addEventListener('click', function() {
      // In a real scenario, you would perform actual login validation here.
      // For the sake of this example, let's assume the login is successful.
      
      // Redirect to the main page.
      window.location.href = 'Mainpage.html';
    });
  });
  
