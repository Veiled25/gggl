document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;

    // Basic validation
    if (username) {
        alert('Form submitted!');
        // Perform actual login logic here
    } else {
        alert('Please enter your username.');
    }
});
