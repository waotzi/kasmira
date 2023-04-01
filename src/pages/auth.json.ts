import { APIRoute } from "astro";
import db from "../db"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = import.meta.env.JWT_SECRET_KEY;


export const Encrypt = {
  cryptPassword: (password: string) =>
      bcrypt.genSalt(10)
      .then((salt => bcrypt.hash(password, salt)))
      .then(hash => hash),
  
  comparePassword: (password: string, hashPassword: string) =>
      bcrypt.compare(password, hashPassword)
      .then(resp => resp)
}

export const post: APIRoute = async ({ request, redirect }) => {

  if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;
    const isRegister = confirmPassword !== null;
    const userExists = await db.get(`users/${username}`).catch(() => null);

    if (isRegister) {
      if (password !== confirmPassword) {
        const queryParams = new URLSearchParams({ error: 'password_mismatch' });
        const redirectUrl = '/signup?' + queryParams.toString();
        return redirect(redirectUrl, 307);
      }
      
      // Check if user already exists in database

      if (userExists) {
        const queryParams = new URLSearchParams({ error: 'username_taken' });
        const redirectUrl = '/signup?' + queryParams.toString();
        return redirect(redirectUrl, 307);
      }
      
      // Hash the password and store the user in the database
      const hashedPassword =  await Encrypt.cryptPassword(password);
      await db.put(`users/${username}`, hashedPassword);
    }
    else {
      if (!userExists) {
        const queryParams = new URLSearchParams({ error: 'wrong_password' });
        const redirectUrl = '/login?' + queryParams.toString();
        return redirect(redirectUrl, 307);
      }
      
      const hashedPassword = await db.get(`users/${username}`);
      const isMatch = await Encrypt.comparePassword(password, hashedPassword);
      if (!isMatch) {
        const queryParams = new URLSearchParams({ error: 'wrong_password' });
        const redirectUrl = '/login?' + queryParams.toString();
        return redirect(redirectUrl, 307);
      }
    }
    // Set the jwt

    const token = jwt.sign({username}, secretKey)
    localStorage.setItem('token', token);

    // Redirect to the index page
    return redirect(`/${username}`, 307);
    
    
  } 
  return new Response(null, { status: 400 });
};


  export const all: APIRoute = ({ request, redirect }) => {
    return redirect('/signup', 307);
  }