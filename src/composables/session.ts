import { verify, JwtPayload } from 'jsonwebtoken';

const secretKey = import.meta.env.JWT_SECRET_KEY;

function getUsername(): string | null {
  // Retrieve the token from the local storage
  const token = localStorage.getItem('token');

  let isLoggedIn = false;
  let username: string | null = null;

  if (token) {
    try {
      // Verify the token using the secret key
      const decoded = verify(token, secretKey) as JwtPayload;
      username = decoded.username;
      isLoggedIn = true;
    } catch (error) {
      // The token is invalid or has expired
      console.error('Invalid or expired token:', error.message);
    }
  } else {
    // The user is not logged in
    console.log('User is not logged in');
  }

  return username
}

export default getUsername;
