module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
       return res.redirect('/login'); 
    }
    next(); // proceed to next middleware only if isLoggedIn
}