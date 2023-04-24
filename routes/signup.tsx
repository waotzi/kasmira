import { PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import AuthForm from "../components/AuthForm.tsx";

export default function SignUp(props: PageProps) {
  return (
    <>
        <AuthForm title="Sign up" actionUrl="/auth.json">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/>
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required/>
            { props.url.searchParams.get("error") === 'password_mismatch' &&
            <p class="error-message">
                Passwords do not match.
            </p>
            }
            { props.url.searchParams.get("error") === 'username_taken' &&
            <p class="error-message">
                Username is taken.
            </p>
            }
            <button type="submit" class="login-btn">Sign up</button>
        </AuthForm>      

    </>
  );
}
