import { APIRoute } from "astro";


export const post: APIRoute = async ({ request, redirect }) => {
  console.log(request.headers);

  if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
    const formData = await request.formData();
    const name = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (password !== confirmPassword) {
      const queryParams = new URLSearchParams({ error: 'password_mismatch' });
      const redirectUrl = '/signup?' + queryParams.toString();
      return redirect(redirectUrl, 307);
    }

    return new Response(
      JSON.stringify({
        message: "Your name was: " + name,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } 
  return new Response(null, { status: 400 });
};


  export const all: APIRoute = ({ request, redirect }) => {
    return redirect('/signup', 307);
  }