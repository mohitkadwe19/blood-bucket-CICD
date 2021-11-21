
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
const getDonorList = (req, res) => {
    res.render('Hospital/donorList', {
        title: 'Donor List',
    });
};

// receiver list get method
const getReceiverList = (req, res) => {
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
    getDonorList,
    getReceiverList,
    getAppoint,
    getChangeDetails,

};