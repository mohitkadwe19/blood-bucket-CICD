
// dashboard get methods
const dashboard = (req, res) => {
    res.render('Admin/index');
}

// admin login get methods
const login = (req, res) => {
    res.render('Admin/login');
}

// admin register get methods
const register = (req, res) => {
    res.render('Admin/register');
}

// hospital register get methods
const hospitalRegister = (req, res) => {
    res.render('Admin/hospitalRegister');
}

// hospital list get methods
const hospitalList = (req, res) => {
    res.render('Admin/hospitalList');
}

// get blood bucket data get methods
const GetBloodBucket = (req, res) => {
    res.render('Admin/bloodBucketData');
}

//donor list get methods
const donorList = (req, res) => {
    res.render('Admin/donorList');
}

// receiver list get methods
const receiverList = (req, res) => {
    res.render('Admin/receiverList');
}


module.exports = {
    dashboard,
    login,
    register,
    hospitalRegister,
    hospitalList,
    GetBloodBucket,
    donorList,
    receiverList

}