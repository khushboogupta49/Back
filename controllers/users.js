const User = require('../models/Users')

const fetchUsers = async (req, res) => {
  try {
      const users = await User.find()
      res.json({
          status: 'SUCCESS',
          data: users
      });
  } catch (error) {
      res.json({
          status: 'FAILED',
          message: 'Something went wrong'
      })
  }
}

const createUser = async (req, res) => {
  try {
      const { username, name, email, profileImage, bio } = req.body;

      await User.create({ username, name, email, profileImage, bio })
      res.json({
          status: 'SUCCESS',
          message: 'User created successfully'
      });
  } catch (error) {
      res.json({
          status: 'FAILED',
          message: 'Something went wrong'
      })
  }
}

const updateUser = async (req, res) => {
  try {
      const { id } = req.params;
      const { username, name, email, profileImage, bio } = req.body;
      
      await User.findByIdAndUpdate(id, { username, name, email, profileImage, bio })
      res.json({
          status: 'SUCCESS',
          message: 'User updated successfully'
      });
  } catch (error) {
      res.json({
          status: 'FAILED',
          message: 'Something went wrong'
      })
  }
}

const deleteUser = async (req, res) => {
  try {
      const { id } = req.params;
      await User.findByIdAndDelete(id)
      res.json({
          status: 'SUCCESS',
          message: 'User deleted successfully'
      });
  } catch (error) {
      res.json({
          status: 'FAILED',
          message: 'Something went wrong'
      })
  }
}

module.exports = {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser
}