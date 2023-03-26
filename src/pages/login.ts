// login.ts
import Input from '../components/atoms/Input'
import BaseTemplate from '../components/templates/BaseTemplate';

const template = BaseTemplate(`
  <div class="form">
    <h1>Login</h1>
    <p>Please login with your email and password or connect with Metamask.</p>
    <form action="/login" method="post" class="login-form">
      ${Input({ label: "Email", placeholder: "Enter your email" })}
      ${Input({ label: "Password", placeholder: "Enter your password", type: "password" })}
      <button type="submit">Login</button>
    </form>
  </div>
`);

export default template;

