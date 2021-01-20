const mysql = require('mysql');

exports.pool = mysql.createPool({
    host: "rtrod-mysql.ccno6mzzzdfg.ap-northeast-2.rds.amazonaws.com",
    user: "rtrod",
    password: "rtrod01!",
    database: "rtrod",
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
