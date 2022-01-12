const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'
let alert = require('alert');
const app = express();
session = require("express-session"),
sessionStorage = require('sessionstorage');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("picture"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const Admin = require("../Schoolsite/models/admin");
const Student = require("../Schoolsite/models/addstu");
const Teacher = require("../Schoolsite/models/addtch");
const Marks = require("../Schoolsite/models/addmarks");
const Attendance = require("../Schoolsite/models/addatt");


mongoose.connect("mongodb://localhost:27017/angela", { useNewUrlParser: true});

var stname = "";
var stpass = "";
var tname = "";

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Welcome.html");
});

app.get("/home.html", function(req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/aboutus.html", function(req, res) {
  res.sendFile(__dirname + "/aboutus.html");
});

app.get("/academic.html", function(req, res) {
  res.sendFile(__dirname + "/academic.html");
});

app.get("/infra.html", function(req, res) {
  res.sendFile(__dirname + "/infra.html");
});

app.get("/admissions.html", function(req, res) {
  res.sendFile(__dirname + "/admissions.html");
});

app.get("/loginstu.html", function(req, res) {
  res.sendFile(__dirname + "/loginstu.html");
});

app.get("/logintch.html", function(req, res) {
  res.sendFile(__dirname + "/logintch.html");
});

app.get("/loginadmin.html", function(req, res) {
  res.sendFile(__dirname + "/loginadmin.html");
});

app.get("/loginadmin.html", function(req, res) {
  res.sendFile(__dirname + "/loginadmin.html");
});

app.get("/ADD_MARKS.HTML", function(req, res) {
  res.sendFile(__dirname + "/ADD_MARKS.HTML");
});

app.get("/ADDSTD.html", function(req, res) {
  res.sendFile(__dirname + "/ADDSTD.html");
});

app.get("/ADDTCR.html", function(req, res) {
  res.sendFile(__dirname + "/ADDTCR.html");
});

app.get("/ATTENDANCE.html", function(req, res) {
  res.sendFile(__dirname + "/ATTENDANCE.html");
});

app.get("STU1.ejs", function(req, res) {
  res.render(__dirname + "STU1.ejs");
});

app.get("/ADMIN.HTM", function(req, res) {
  res.sendFile(__dirname + "/ADMIN.HTM");
});
app.get("/data_file", function(req, res) {
  res.sendFile(__dirname + "/admin.json");
});

// app.get("/View_Marks.HTML", function(req, res) {
//   res.sendFile(__dirname + "/View_Marks.HTML");
// });


app.post("/loginadmin.html", function(req, res) {
  var name = req.body.uname;
  var pass = req.body.psw;
  console.log(name);
  console.log(pass);
  if (name === "admin" && pass === "admin123") {
    //Save data to sessionStorage
  sessionStorage.setItem('name', 'admin');
    res.sendFile(__dirname + "/ADMIN.htm");
  } else {
    alert("Please enter correct user name and password.");
  }
});

app.post("/ADDTCR.html", function(req, res) {
  var tname = req.body.NAME;
  var tid = req.body.TID;
  var tpass = req.body.pass;
  var tdob = req.body.dob;
  var tage = req.body.age;
  var tgender = req.body.gender;
  var tcrs = req.body.crs;
  var tctc = req.body.ctc;
  var tadd = req.body.add;
  const tch = new Teacher({
    name: tname,
    TId: tid,
    pass: tpass,
    date: tdob,
    age: tage,
    gender: tgender,
    course: tcrs,
    contact: tctc,
    address: tadd
});
tch.save();
res.redirect("/ADDTCR.HTML");
});


app.post("/ADDSTD.htm", function(req, res) {
  var sname = req.body.NAME;
  var smname = req.body.MNAME;
  var sfname = req.body.FNAME;
  var sregno = req.body.regno;
  var spass = req.body.pass;
  var sdob = req.body.dob;
  var sage = req.body.age;
  var sgender = req.body.gender;
  var sclass = req.body.sclass;
  var sctc = req.body.ctc;
  var sadd = req.body.add;
  const stu = new Student({
    name: sname,
    mname: smname,
    fname: sfname,
    reg: sregno,
    pass: spass,
    date: sdob,
    age: sage,
    gender: sgender,
    cls: sclass,
    contact: sctc,
    address: sadd
});
stu.save();
res.redirect("/ADDSTD.HTML");
});


app.post("/ADD_MARKS.HTML", function(req, res) {
  var sname = req.body.NAME;
  var sregno = req.body.regno;
  var scrs = req.body.course;
  var smarks = req.body.marks;

  const marks = new Marks({
    name: sname,
    reg: sregno,
    course: scrs,
    marks: smarks
});
marks.save();
res.redirect("/ADD_MARKS.HTML");
});

app.post("/ATTENDANCE.HTML", function(req, res) {
  var sname = req.body.NAME;
  var sregno = req.body.regno;
  var sdate = req.body.date;
  var satd = req.body.atd;

  const attendance = new Attendance({
    name: sname,
    reg: sregno,
    date: sdate,
    Attendance: satd
});
attendance.save();
res.redirect("/ATTENDANCE.HTML");
});

app.get("/STU1", function(req,res){
  
    Student.findOne({}, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
            MongoClient.connect(url, function(err, db) {
              var dbo = db.db("angela")

              dbo.collection("students").find({name: stname}).toArray(function(err, result) {
                console.log(result)
                res.render("STU1", {name: result[0].name, 
                  fname:result[0].fname , 
                  mname:result[0].mname, 
                  reg: result[0].reg, 
                  date: result[0].date,
                  age:result[0].age,
                  gender:result[0].gender,
                  cls:result[0].cls,
                  contact:result[0].contact,
                  address:result[0].address});
                // res.send(html)
                db.close()
              })
            })
          }
    })
  });


app.post("/loginstu.html", function(req, res) {
  stname = req.body.uname;
  stpass = req.body.psw;

  Student.findOne({ name: stname }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.pass === stpass) {
          // res.write("Login Successfull");
          // res.send();
          res.redirect("/STU1");
        }
      }
    }
  });
});



// app.get("/hello", function(req, res) {
//   // res.send("Hello");
//   // const body= req.body;
//     // console.log(body);
//     // var stname = "Ishaan";
//     MongoClient.connect(url, function (err, db) {
//         if(err) throw err;
//         var dbo = db.db("angela")
//         dbo.collection("students").find( {name : stname} ).toArray(function(err, result) {
//             // res.status(200).send(result)
//             res.send(result)
//             db.close()
//         })
//     })  
// });   

app.get("/TCR1", function(req, res) {
  Teacher.findOne({}, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
            MongoClient.connect(url, function(err, db) {
              var dbo = db.db("angela")

              dbo.collection("teachers").find({name: tname}).toArray(function(err, result) {
                console.log(result)
                res.render("TCR1", {name: result[0].name, 
                  TId:result[0].TId , 
                  date: result[0].date,
                  age:result[0].age,
                  gender:result[0].gender,
                  course:result[0].course,
                  contact:result[0].contact,
                  address:result[0].address});
                // res.send(html)
                db.close()
              })
            })
          }
    })
});

app.post("/logintch.html", function(req, res) {
  tname = req.body.uname;
  var tpass = req.body.psw;

  Teacher.findOne({ name: tname }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.pass === tpass) {
          // res.write("Login Successfull");
          // res.send();
          res.redirect("/TCR1")
          // res.sendFile(__dirname + "/TCR1.HTML");
        }
      }
    }
  });
});

app.get("/view_att.html", function(req, res) {
  Attendance.findOne({}, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
          MongoClient.connect(url, function(err, db) {
            var dbo = db.db("angela")
            console.log("Read this");
            console.log(stname);
            // dbo.collection("attendances").find({name: stname}).sort({name:1}).limit(2).toArray(function(err, result) {
              dbo.collection("attendances").find( { name:stname}).toArray(function(err, result) {
              console.log(result)
              res.render("view_att", {result: result});
            })
          })

        }
      })
    });


app.get("/View_Marks.HTML", function(req, res) {
  Marks.findOne({}, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
          MongoClient.connect(url, function(err, db) {
            var dbo = db.db("angela")

            dbo.collection("marks").find( { name:stname}).toArray(function(err, result) {
              console.log(result)
              res.render("View_Marks", {result: result});
              // res.send(html)
            })
          })

        }
      })
    });


const PORT = process.env.PORT || 4200;

app.listen(PORT, console.log("Server Started on port " + PORT));
// app.use("/", require("./routes/index"));
// app.use("/", require("./routes/users"));