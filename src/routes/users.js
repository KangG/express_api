const express = require('express');
const router = express.Router();

const mysql = require('mysql');

//-----------DB------------------
// const db_config  = require('../db-config.json');
const pool = mysql.createPool({
    // host: db_config.host,
    // user: db_config.user,
    // password: db_config.password,
    // database: db_config.database,
    host: "janedb.cpuglwdnhpqg.ap-northeast-2.rds.amazonaws.com",
    user: "admin1234",
    password: "admin1234",
    database: "kdkd",
    port: 3306,
    connectionLimit: 20,
    waitForConnection: false
});
//-----------DB------------------

/* GET users listing. */
router.get('/', (req, res, next) => {
  consoelog.log("이건 오니?");
  res
    .status(200)
    .json({
      msg: "users",
    })
    .end();
});

router.post('/', (req, res, next) => {
  consoelog.log("여기는???");
  res
    .status(200)
    .json({
      msg: "users",
    })
    .end();
});

router.post('/login', (req, res) => {
    consoelog.log("나야나");
    res
      .status(200)
      .json({
        msg: "users login post",
      })
      .end();
    // let userid = req.body.username;
    // let pass = req.body.password;
    // let params = [userid, pass];
    // let user_check = `
    // select *
    // from user
    // where id=? and password=?;
    // `;

    // pool.getConnection((err, connection) => {
    //     connection.query(user_check, params, (err, login_results) => {
    //         if (err) {
    //             console.log(err);
    //             connection.release();
    //             res.status(500).send('Internal Server Error!!!')
    //         }

    //         if (login_results.length == 1) {
    //             if (err) {
    //                 console.log(err);
    //                 connection.release();
    //                 res.status(500).send('Internal Server Error!!!')
    //             }
    //             res
    //               .status(200)
    //               .json({
    //                 userid: login_results[0].id,
    //                 name: login_results[0].name,
    //                 grade: login_results[0].grade,
    //               })
    //               .end();
    //             // sess.userid = login_results[0].id;
    //             // sess.name = login_results[0].name;
    //             // sess.grade = login_results[0].grade;
    //             // req.session.save(() => {
    //             //     connection.release();
    //             //     res.redirect('/home');
    //             // });
    //         } else {
    //             connection.release();
    //             res.render('user/login', { pass: false });
    //         }
    //     })
    // });
});

module.exports = router;
