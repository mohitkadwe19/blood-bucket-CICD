const express = require('express');
const router = express.Router();
const {
    home,
    getFindDonor,
    getOrganizeCamp,
    getJoinUs,
    getAbout,
    getContact,
    getRegister,
    getLogin,
    getForgotPassword,
    getResetPassword,
    getUserDashboard,
    getHospital,
    getAppointment,
    getUserProfile
} = require('../controllers/userController')


// home get controller
router.get('/', home);

//find Donor get controller
router.get('/getFindDonor', getFindDonor);

// organize Camp get controller
router.get('/getOrganizeCamp', getOrganizeCamp);

// about get controller
router.get('/getAbout', getAbout);

// contact get controller
router.get('/getContact', getContact);

// join us get controller
router.get('/getJoinUs', getJoinUs);

// register get controller
router.get('/getRegister', getRegister);

// login get controller
router.get('/getLogin', getLogin);

// forgotPassword get controller
router.get('/getForgotPassword', getForgotPassword);

// resetPassword get controller
router.get('/getResetPassword', getResetPassword);

// user dashboard get controller
router.get('/getUserDashboard', getUserDashboard);

// hospital get controller
router.get('/getHospital', getHospital);

// get appointment get controller
router.get('/getAppointment', getAppointment);

// get user get controller
router.get('/getUserProfile', getUserProfile);

// export routes
module.exports = router;