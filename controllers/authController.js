// authController.js

import AuthService from '../service/authService.js';

class AuthController {
  /**
   * Generate a JWT token based on provided username and password.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async generateToken(req, res) {
    const { username, password } = req.body;

    try {
      // Generate token using AuthService
      const token = AuthService.generateToken(username, password);
      // Send token in response
      res.json({ token });
    } catch (error) {
      // Handle error if provided credentials are invalid
      res.status(401).json({ error: error.message });
    }
  }
}

export default new AuthController();
