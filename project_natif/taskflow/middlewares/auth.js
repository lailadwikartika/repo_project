// middlewares/auth.js - authentication middleware
module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    req.flash('error_msg', 'Please login to view that resource');
    res.redirect('/auth/login');
  }
};
