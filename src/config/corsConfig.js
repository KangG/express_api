const express = require('express');
const app = express();

exports.checkOrigin = function(req, callback) {
  let corsOptions;
  const acceptList = [
    "http://localhost:3000"
  ];
  console.log(req.header('Origin'));
  if (acceptList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credential: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
}

// set headers
exports.setHeader = function(req, res, next) {
  console.log(req.path);
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization, X-RTROD-Token, X-Rtrod-Credential"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "X-RTROD-Token, X-Rtrod-Signed-Url"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
}
