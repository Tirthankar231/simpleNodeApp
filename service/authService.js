// authService.js

import jwt from 'jsonwebtoken';

class AuthService {
  /**
   * Generate a JWT token based on provided username and password.
   * @param {string} username - The username to authenticate.
   * @param {string} password - The password to authenticate.
   * @returns {string} - JWT token if authentication is successful.
   * @throws {Error} - If provided credentials are invalid.
   */
  generateToken(username, password) {
    // Retrieve API credentials from environment variables
    const apiUser = process.env.API_USER;
    const apiPassword = process.env.API_PASSWORD;

    // Check if provided username and password match the predetermined user
    if (username === apiUser && password === apiPassword) {
      // Generate token with username and password payload
      const token = jwt.sign({ user: username, password: password }, process.env.JWT_SECRET);
      return token;
    } else {
      // Throw error if provided credentials are invalid
      throw new Error('Invalid credentials');
    }
  }
}

export default new AuthService();
