const express = require('express');
const router = express.Router();
const { home, donateBlood, donorCenter, appointment, support, about, contact, privacyPolicy, register, login, forgotPassword, resetPassword, userDashboard, getHospital, getAppointment, getUserProfile } = require('../controllers/userController')


// home get controller
router.get('/', home);

// blood donation get controller
router.get('/donateBlood', donateBlood);

// donor Center  get controller
router.get('/donorCenter', donorCenter);

// appointment get controller
router.get('/appointment', appointment);

// support get controller
router.get('/support', support);

// about get controller
router.get('/about', about);

// contact get controller
router.get('/contact', contact);

// privacy policy get controller
router.get('/privacyPolicy', privacyPolicy);

// register get controller
router.get('/register', register);

// login get controller
router.get('/login', login);

// forgotPassword get controller
router.get('/forgotPassword', forgotPassword);

// resetPassword get controller
router.get('/resetPassword', resetPassword);

// user dashboard get controller
router.get('/userDashboard', userDashboard);

// hospital get controller
router.get('/getHospital', getHospital);

// get appointment get controller
router.get('/getAppointment', getAppointment);

// get user get controller
router.get('/getUserProfile', getUserProfile);

// export routes
module.exports = router;