import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import AuthForm from "../components/AuthForm.tsx";

export default function SignUp(props: PageProps) {
  const showPasswordError = props.url.searchParams.get("error") === "error_password";
  const showUsernameError = props.url.searchParams.get("error") === "user_exists";

  return (
    <>
        { showPasswordError && (
          <p class="error-message">
              Passwords do not match.
          </p>
        )}
        { showUsernameError && (
          <p class="error-message">
              Username is taken.
          </p>
        )}
        <AuthForm title="Sign up" actionUrl="/api/signup">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
            <label for="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password" required/>
           
            <button type="submit">Sign up</button>
        </AuthForm>      

    </>
  );
}
