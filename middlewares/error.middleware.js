function errorHandler(err, req, res, next) {
  res.json({
    acknowledgement: false,
    name: err.name,
    message: err.message,
  });
}

module.exports = errorHandler;