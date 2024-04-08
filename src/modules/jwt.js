import jwt from 'jsonwebtoken';
import Config from '../config/config';

class ModuleJWT {
  static sign(body) {
    try {
      return jwt.sign(body, Config.SERVER_TOKEN_SECRET, { expiresIn: '1h' });
    } catch (ignore) {
      return '';
    }
  }

  static verify(token) {
    try {
      const parsedToken = jwt.verify(token, Config.SERVER_TOKEN_SECRET);

      // delete unused information
      delete parsedToken['iat'];
      delete parsedToken['exp'];
      delete parsedToken['iss'];

      return {
        valid: true,
        data: parsedToken,
      };
    } catch (ignore) {
      return {
        valid: false,
        data: undefined,
      };
    }
  }
}

export default ModuleJWT;
