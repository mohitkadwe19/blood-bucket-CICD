
// hospital dashboard get method
const getHospitalDashboard = (req, res) => {
    res.render('Hospital/index', {
        title: 'Hospital Dashboard',
    });
};

//hospital login get method
const getHospitalLogin = (req, res) => {
    res.render('Hospital/login', {
        title: 'Hospital Login',
    });
};

// donor list get method
const getHospitalDonorList = (req, res) => {
    res.render('Hospital/donorList', {
        title: 'Donor List',
    });
};

// receiver list get method
const getHospitalReceiverList = (req, res) => {
    res.render('Hospital/receiverList', {
        title: 'Receiver List',
    });
};

// appoint get method
const getAppoint = (req, res) => {
    res.render('Hospital/appoint', {
        title: 'Appoint',
    });
};

// change details get method
const getChangeDetails = (req, res) => {
    res.render('Hospital/changeDetails', {
        title: 'Change Details',
    });
};


module.exports = {
    getHospitalDashboard,
    getHospitalLogin,
    getHospitalDonorList,
    getHospitalReceiverList,
    getAppoint,
    getChangeDetails,

};