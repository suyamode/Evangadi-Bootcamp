export const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, please try again later",
  };
  return res.status(customError.statusCode).json({
    status: false,
    message: customError.msg,
  });
};
