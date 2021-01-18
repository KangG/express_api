const mysql = require('mysql');

exports.pool = mysql.createPool({
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

exports.dbErrorHandler = (err, connection, res) => {
    if (err) {
        console.log(err);
        connection.release();
        res
            .status(500)
            .json({
                msg: "DataBase Error!!"
            })
            .end();
    }
}
