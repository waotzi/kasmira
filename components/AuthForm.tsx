
interface AuthFormProps {
  title?: string;
  actionUrl?: string;
  children?: (false | preact.JSX.Element)[];
}

export default function AuthForm({ title, actionUrl, children}: AuthFormProps) {
  return (
    <form action={actionUrl} method="POST" class="auth-form">
        <h2>{title}</h2>
        {children}
    </form>
  );
}



