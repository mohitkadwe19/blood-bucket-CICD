

// home page get method
const home = (req, res) => {
    res.render('Blood/index', {
        title: 'Home',
    });
};

// Blood donation get method
const getFindDonor = (req, res) => {
    res.render('Blood/findDonor', {
        title: 'find a donor',

    });
};

//organize Camp get method
const getOrganizeCamp = (req, res) => {
    res.render('Blood/organizeCamp', {
        title: 'organizeCamp',
    })
};
// join us  get method
const getJoinUs = (req, res) => {
    res.render('Blood/joinUs', {
        title: 'join us',
    })
};


// about us get method
const getAbout = (req, res) => {
    res.render('Blood/about', {
        title: 'About',
    })
};

//contact  us get  method
const getContact = (req, res) => {
    res.render('Blood/contact', {
        title: 'Contact',
    })
};


// register get method
const getRegister = (req, res) => {
    res.render('Blood/register', {
        title: 'Register',
    })
};

// login get method
const getLogin = (req, res) => {
    res.render('Blood/login', {
        title: 'Login',
    })
};

// forgot password get method
const getForgotPassword = (req, res) => {
    res.render('Blood/forgotPassword', {
        title: 'Forgot Password',
    })
};

// reset password get method
const getResetPassword = (req, res) => {
    res.render('Blood/resetPassword', {
        title: 'Reset Password',
    })
};

// user dashboard get method
const getUserDashboard = (req, res) => {
    res.render('Blood/userDashboard', {
        title: 'User Dashboard',
    })
};

// hospital list get method
const getHospital = (req, res) => {
    res.render('Blood/hospitalList', {
        title: 'Hospital List',
    })
};

// get appointment get method
const getAppointment = (req, res) => {
    res.render('Blood/getAppointment', {
        title: 'Appointment',
    })
};

// get user profile get method
const getUserProfile = (req, res) => {
    res.render('Blood/userProfile', {
        title: 'User Profile',
    })
};


module.exports = {
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
}