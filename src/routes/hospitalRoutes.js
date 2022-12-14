const express = require('express');
const router = express.Router();
const { getHospitalDashboard, getHospitalLogin, getHospitalDonorList, getHospitalReceiverList, getAppoint, getChangeDetails } = require('../controllers/hospitalController');


// get hospital dashboard get controller
router.get('/getHospitalDashboard', getHospitalDashboard);

//get hospital login get controller
router.get('/getHospitalLogin', getHospitalLogin);

// get donor list get controller
router.get('/getHospitalDonorList', getHospitalDonorList);

// get receiver list get controller
router.get('/getHospitalReceiverList', getHospitalReceiverList);

//get appoint get controller
router.get('/getAppoint', getAppoint);

// get change details get controller
router.get('/getChangeDetails', getChangeDetails);

// export hospital routes
module.exports = router;