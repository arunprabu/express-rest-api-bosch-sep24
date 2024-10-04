const User = require("../models/auth.model");

exports.signup = (req, res) => {
  // 1. get the form data
  console.log(req.body);
  // 2. save the name, email in the database 
  // 3. encrypt the password.  (get salt and hash)
  // 4. save the salt and hash in the database. NEVER save password
  const userDao = new User(req.body);
  userDao.encryptPassword(req.body.password);
  userDao.save()
    .then((user) => {
      // TODO: send the email to the user using sendgrid
      res.json({
        email: user.email,
        message: "Signup successful!. Please verify your email to activate your account",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

exports.login = (req, res) => {
  // 1. get the form data
  console.log(req.body);
  
  // res.json({ message: "login successful" });
}

