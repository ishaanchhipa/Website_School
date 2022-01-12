const express = require("express");
const { append } = require("vary");
const router = express.Router();
// const part = require('../controllers/school/controller');

// router.route('/register', (req, res) => { 

// });

// router.route('/login').post(part.login);

router.get("/", (req, res) => {
    res.send( "/academic.html");
});
// router.route('/', (req, res) => { 
// });
// router.route('/login', (req, res) => { 
//     res.send(__dirname + "/stu1.html");
// });
// // router.route('/addmarks').post(part.addmarks);
// router.route('/addmarks', (req, res) => { 

// });
// // router.route('/fetchmarks').post(part.fetchmarks);
// router.route('/fetchmarks', (req, res) => { 

// });
// // router.route('/addattendance').post(part.addattandence);
// router.route('/addattendance', (req, res) => { 

// });
// // router.route('/fetchattendance').post(part.fetchattandence);
// router.route('/fetchattendance', (req, res) => { 

// });
module.exports = router;