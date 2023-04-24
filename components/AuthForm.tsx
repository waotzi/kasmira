import { Component } from "https://esm.sh/preact@10.13.1";


interface AuthFormProps {
  title?: string;
  actionUrl?: string;
  children?: (false | preact.JSX.Element)[];
}

export default function AuthForm({ title, actionUrl, children}: AuthFormProps) {
  return (
    <div class="login-page">
        <div class="login-form-container">
            <form action={actionUrl} method="POST">
                <h2>{title}</h2>
                {children}
            </form>
        </div>
    </div>   
  );
}



