const express = require('express');
const router = express.Router();

const dbConfig = require('../config/dbConfig');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res
    .status(200)
    .json({
      msg: "users",
    })
    .end();
});

router.post('/login', (req, res) => {
  let userid = req.body.userid;
  let password = req.body.password;
  let params = [userid, password];
  let user_check = `
    select *
    from user
    where id=? and password=?aaa;
    `;

  dbConfig.pool.getConnection((err, connection) => {
    connection.query(user_check, params, (err, login_results) => {
      dbConfig.dbErrorHandler(err, connection, res);

      if (login_results.length == 1) {
        dbConfig.dbErrorHandler(err, connection, res);
        res
          .status(200)
          .json({
            userid: login_results[0].id,
            name: login_results[0].name,
            grade: login_results[0].grade,
          })
          .end();
        // sess.userid = login_results[0].id;
        // sess.name = login_results[0].name;
        // sess.grade = login_results[0].grade;
        // req.session.save(() => {
        //     connection.release();
        //     res.redirect('/home');
        // });
      } else {
        dbConfig.dbErrorHandler(err, connection, res);
      }
    })
  });
});

module.exports = router;
