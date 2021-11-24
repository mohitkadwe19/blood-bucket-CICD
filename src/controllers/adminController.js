
// dashboard get methods
const getAdminDashboard = (req, res) => {
    res.render('Admin/index', {
        title: 'Dashboard',
    });
}

// admin login get methods
const getAdminLogin = (req, res) => {
    res.render('Admin/login', {
        title: 'Login',
    });
}

// admin register get methods
const getAdminRegister = (req, res) => {
    res.render('Admin/register', {
        title: 'Register',
    });
}

// hospital register get methods
const getHospitalRegister = (req, res) => {
    res.render('Admin/hospitalRegister', {
        title: 'hospital Register',
    });
}

// hospital list get methods
const getHospitalList = (req, res) => {
    res.render('Admin/hospitalList', {
        title: 'Hospital List',
    });
}

// get blood bucket data get methods
const getBloodBucket = (req, res) => {
    res.render('Admin/bloodBucketData', {
        title: 'Blood Bucket Data',
    });
}

//donor list get methods
const getDonorList = (req, res) => {
    res.render('Admin/donorList', {
        title: 'Donor List',
    });
}

// receiver list get methods
const getReceiverList = (req, res) => {
    res.render('Admin/receiverList', {
        title: 'Receiver List',
    });
}

// donor request  get methods
const getDonorRequest = (req, res) => {
    res.render('Admin/donorRequest', {
        title: 'Donor Request List',
    });
}

// camp request  get methods
const getCampRequest = (req, res) => {
    res.render('Admin/campRequest', {
        title: 'Camp Request List',
    });
}

// contact request get methods
const getContactRequest = (req, res) => {
    res.render('Admin/contactData', {
        title: 'Contact Request List',
    });
}


module.exports = {
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


}