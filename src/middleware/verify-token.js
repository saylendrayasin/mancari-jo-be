import ModuleJWT from '../modules/jwt';

const MiddlewareVerifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const parsedToken = ModuleJWT.verify(token);

  try {
    if (!token) {
      throw new Error('AUTH_TOKEN_NOT_FOUND');
    }
    if (!parsedToken.valid) {
      throw new Error('AUTH_TOKEN_INVALID');
    }
    next();
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

export default MiddlewareVerifyToken;
