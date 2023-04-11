import { APIRoute } from "astro";
import db from "../db"


export const post: APIRoute = async ({ request, redirect }) => {
    if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
      const formData = await request.formData();
      const username = formData.get("username") as string;
      const publicAddress = formData.get("public-address") as string;
  
      try {
        const userDoc = await db.get(`/users/${username}`);
        const crypto = userDoc.crypto || [];
        crypto.push({ title: 'New Crypto', key: publicAddress });
        userDoc.crypto = crypto
        console.log(crypto)
        await db.put(userDoc);

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