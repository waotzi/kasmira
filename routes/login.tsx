import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import AuthForm from "../components/AuthForm.tsx";

export default function Login(props: PageProps) {
  const showError = props.url.searchParams.get("error") === "invalid_credentials";

  return (
    <>
     {showError && (
            <p className="error-message">Wrong username or password.</p>
          )}
        <AuthForm title="Login" actionUrl="/api/login">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
            
            <button type="submit" class="login-btn">Login</button>
            
        </AuthForm>      
        
       

    </>
  );
}
