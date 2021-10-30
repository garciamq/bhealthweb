// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");
// const { default: axios } = require("axios");

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");


// const bcrypt = require('bcrypt')
// const saltRounds = 10

// const path = require('path');
// const port = process.env.PORT || 3002;

// if(process.env.NODE_ENV === "production") {
//   app.use(express.static('build'));
//   app.get('*', (req,res) => {
//     req.sendFile(path.resolve(__dirname,'build', 'index.html'));
//   })
// }


// app.use(express.json());
// app.use(
//   cors({
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// })
// );
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true}));

// app.use(session({
//   key: "userId",
//   secret: "bhealth",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     expires: 60 * 60 * 24,
//   },
// })
// );

// const db = mysql.createConnection({
//   user: "root",
//   host: "Localhost",
//   password: "root",
//   database: "bhealth",
//    // user: "bdaf21fb3b21c4",
//   // host: "us-cdbr-east-04.cleardb.com",
//   // password: "84dab1de",
//   // database: "heroku_ac50b13ac6ef3d9",
// });

// app.post("/register", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const address = req.body.address;
//   const phone = req.body.phone;
//   const gender = req.body.gender;

//   bcrypt.hash(password, saltRounds, (err, hash) => {

//     if (err) {
//       console.log(err)
//     }

//     db.query(
//       "INSERT INTO users (name, email, password, address, phone) VALUES(?,?,?,?,?)",
//       [name,email,hash,address,phone],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   })
// });

// app.get("/login", (req, res) => {
// if (req.session.user) {
//   res.send({loggedIn: true, user: req.session.user});
// } else {
//   res.send({loggedIn: false});
// }
// })

// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE email = ?;",
//     email,
//     (err, result) => {
//       if (err) {
//         res.send({success: false,  err: err });
//       }
//       if (result.length > 0) {
//         bcrypt.compare(password, result[0].password, (error, response) => {
//           if(response){
//             req.session.user = result;
//             console.log(result);
//             // res.redirect('/sign-up');
//             res.send({success: true, result});
//           } 
//           else{
//             res.send({success: false, message: "Wrong Email / Password combination!" });
//           }
//         })
//       } else {
//         res.send({ success: false, message: "Please insert a valid data" });
//       }
//     }
//   );

// }
// );

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("values inserted");
//       }
//     }
//   );
// });

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET  wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(port, (err) => {
//   if (err) return console.log(err);
//   console.log(`Server running on port ${PORT}`);
// });