const express = require("express");
const router = express.Router();
const AdminAuth = require('../middlewares/AdminAuth');

/* Controllers */
const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/', HomeController.index);
router.get('/user', AdminAuth, UserController.index);
router.get('/user/:id', AdminAuth, UserController.FindUser); 

router.post('/validate', AdminAuth, HomeController.validate);
router.post('/login', UserController.login);
router.post('/changepassword', UserController.changePassword);
router.post('/recoverpassword', UserController.recoverPassword);
router.post('/user', UserController.create);

router.put('/user', AdminAuth, UserController.edit);

router.delete('/user/:id', AdminAuth, UserController.remove);

module.exports = router;