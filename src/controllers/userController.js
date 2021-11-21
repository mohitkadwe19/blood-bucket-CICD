

// home page get method
const home = (req, res) => {
    res.render('Blood/index', {
        title: 'Home',
    });
};

// Blood donation get method
const donateBlood = (req, res) => {
    res.render('Blood/donateBlood', {
        title: 'Donate Blood',

    });
};

//donor center location get method
const donorCenter = (req, res) => {
    res.render('Blood/donorCenter', {
        title: 'Donor Center',
    })
};
// appointment  get method
const appointment = (req, res) => {
    res.render('Blood/appointment', {
        title: 'Appointment',
    })
};

// support get method
const support = (req, res) => {
    res.render('Blood/support', {
        title: 'Support',
    })
};
// about us get method
const about = (req, res) => {
    res.render('Blood/about', {
        title: 'About',
    })
};

//contact  us get  method
const contact = (req, res) => {
    res.render('Blood/contact', {
        title: 'Contact',
    })
};

// private policy get method    
const privacyPolicy = (req, res) => {
    res.render('Blood/privacyPolicy', {
        title: 'Private Policy',
    })
};

// register get method
const register = (req, res) => {
    res.render('Blood/register', {
        title: 'Register',
    })
};

// login get method
const login = (req, res) => {
    res.render('Blood/login', {
        title: 'Login',
    })
};

// forgot password get method
const forgotPassword = (req, res) => {
    res.render('Blood/forgotPassword', {
        title: 'Forgot Password',
    })
};

// reset password get method
const resetPassword = (req, res) => {
    res.render('Blood/resetPassword', {
        title: 'Reset Password',
    })
};

// user dashboard get method
const userDashboard = (req, res) => {
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
    donateBlood,
    donorCenter,
    appointment,
    support,
    about,
    contact,
    privacyPolicy,
    register,
    login,
    forgotPassword,
    resetPassword,
    userDashboard,
    getHospital,
    getAppointment,
    getUserProfile




}