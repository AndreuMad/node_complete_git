const db = require('./db');

module.exports.handleSignUp = (email, password) => {
  // Check if email exists
  db.saveUser({
    email,
    password
  })
  // Save user to database
  // Send the welcome email
};
