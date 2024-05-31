const express = require('express');
const router = express.Router()

const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users')

router.get('/api/users', fetchUsers);

router.post('/api/users', createUser);

router.patch('/api/users/:id', updateUser);

router.delete('/api/users/:id', deleteUser);

module.exports = router;