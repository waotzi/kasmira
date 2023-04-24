import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import AuthForm from "../components/AuthForm.tsx";

export default function Login(props: PageProps) {
  return (
    <>
        <AuthForm title="Login" actionUrl="/auth.json">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
            { props.url.searchParams.get("error") === 'wrong_password' &&
                <p class="error-message">
                    Wrong username or password.
                </p>
            }
            <button type="submit" class="login-btn">Login</button>
        </AuthForm>      

    </>
  );
}
