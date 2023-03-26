import Input from '../atoms/Input'

const SignUpForm = () => {

  return `
    <h1>Sign up</h1>
    <form action="/signup" method="post">
      ${Input({ label: "Email", placeholder: "Enter your email" })}
      ${Input({ label: "Password", placeholder: "Enter your password", type: "password" })}
      ${Input({ label: "Password again", placeholder: "Re-enter your password", type: "password" })}
      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="/login">Log in here</a>.</p>
    </form>
  `;
};

export default SignUpForm;
