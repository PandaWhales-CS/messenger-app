const cookieController = {};
const { User } = require("./../models.js");

// store the user id in a cookie for auth
cookieController.setSSIDCookie = (req, res, next) => {
  if (
    res.locals.rejectNewUser ||
    res.locals.badInput ||
    res.locals.userUnknown ||
    res.locals.noMatch
  ) return next();

  console.log(`we're in the cookie controller now`);
  console.log(req.cookies);
  console.log(res.locals.user);
  if (!res.locals.user) {
    console.log("no user found! skipping cookie controller.");
    return next();
  }
  res.cookie("ssid", res.locals.user._id, { httpOnly: true });
  console.log(
    `This is the response for the set cookie from the db ${res.locals.user} `
  );
  return next();
};

cookieController.findUserByCookie = (req, res, next) => {
  console.log(`this is the req from the findUserByCookie ${req}`);

    User.findOne({_id: req.cookies.ssid})
      .then((response) => {
        res.locals.user = response
        console.log('this is the the user');
        console.log(res.locals.user);
        return next();
      })
      .catch((err)=>{
          if (err) return next({
            log: `cookieController.findUserByCookie: ERROR: Did not properly find user by cookie`,
            message: { err: 'cookieController.findUserByCookie: ERROR: Check server logs for details' }
        })
    })
}


module.exports = cookieController;
