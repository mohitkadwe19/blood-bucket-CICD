const express = require('express');
const router = express.Router();

const { dashboard, login, register, hospitalRegister, hospitalList, GetBloodBucket, donorList, receiverList } = require('../controllers/adminController');

// dashboard get controllers
router.get('/dashboard', dashboard);

// login get controller
router.get('/adminLogin', login);

// register get controller
router.get('/adminRegister', register);

// hospital register get controller
router.get('/hospitalRegister', hospitalRegister);

// hospital list get controller
router.get('/hospitalList', hospitalList);

// blood bucket list get controller
router.get('/GetBloodBucket', GetBloodBucket);

// donor list get controller
router.get('/donorList', donorList);

// receiver list get controller
router.get('/receiverList', receiverList);


// export routes
module.exports = router;

