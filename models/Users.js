const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: String,
  name: String,
  email: String,
  profileImage: String,
  bio: String
})

module.exports = User