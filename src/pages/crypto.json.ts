import { APIRoute } from "astro";
import db from "../db"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = import.meta.env.JWT_SECRET_KEY;

export const post: APIRoute = async ({ request, redirect }) => {
    if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
      const formData = await request.formData();
      const username = formData.get("username") as string;
      const publicAddress = formData.get("public-address") as string;
  
      try {
        let keys;
        try {
          const cryptoKeyData = await db.get(`/users/${username}/crypto`);
          keys = JSON.parse(cryptoKeyData);
        } catch (error) {
          // If cryptoKeyData does not exist, create a new array
          keys = [];
        }
        keys.push({ title: 'New Crypto', key: publicAddress });

        await db.put(`/users/${username}/crypto`, JSON.stringify(keys));
        return redirect(`/${username}`, 307);
      } catch (error) {
        console.error(error);
        const queryParams = new URLSearchParams({ error: 'add_public_address_error' });
        const redirectUrl = `/${username}?` + queryParams.toString();
        return redirect(redirectUrl, 307);
      }
    }
    return new Response(null, { status: 400 });
  };