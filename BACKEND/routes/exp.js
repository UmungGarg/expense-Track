const path = require('path');

const express = require('express');

const expController = require('../controllers/exp');

const router = express.Router();

router.get('/add-exp', expController.getAddUser);

router.post('/add-exp', expController.postAddUser);

router.delete('/delete-exp/:expId', expController.postDeleteUser)

router.post('/edit-exp/:expId', expController.postEditUser)

module.exports = router;