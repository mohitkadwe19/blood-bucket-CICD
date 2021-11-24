const express = require('express');
const router = express.Router();

const {
    getAdminDashboard,
    getAdminLogin,
    getAdminRegister,
    getHospitalRegister,
    getHospitalList,
    getBloodBucket,
    getDonorList,
    getReceiverList,
    getDonorRequest,
    getCampRequest,
    getContactRequest

} = require('../controllers/adminController');

// dashboard get controllers
router.get('/getAdminDashboard', getAdminDashboard);

// login get controller
router.get('/getAdminLogin', getAdminLogin);

// register get controller
router.get('/getAdminRegister', getAdminRegister);

// hospital register get controller
router.get('/getHospitalRegister', getHospitalRegister);

// hospital list get controller
router.get('/getHospitalList', getHospitalList);

// blood bucket list get controller
router.get('/getBloodBucket', getBloodBucket);

// donor list get controller
router.get('/getDonorList', getDonorList);

// receiver list get controller
router.get('/getReceiverList', getReceiverList);

// donor request get controller
router.get('/getDonorRequest', getDonorRequest);

// camp request get controller
router.get('/getCampRequest', getCampRequest);

// contact request get controller
router.get('/getContactRequest', getContactRequest);


// export routes
module.exports = router;

