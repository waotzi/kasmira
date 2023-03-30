import { APIRoute } from "astro";

export const get: APIRoute = ({ params, request }) => {
    return {
      body: JSON.stringify({
        message: "This was a GET!"
      })
    }
  };
  
  export const post: APIRoute = async ({ request }) => {
    console.log(request.headers);

    if (request.headers.get("Content-Type") === "application/x-www-form-urlencoded") {
      const formData = await request.formData();
      const name = formData.get("username");
      console.log(formData);
  
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

  export const del: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: "This was a DELETE!"
      })
    }
  }
  
  export const all: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: `This was a ${request.method}!`
      })
    }
  }