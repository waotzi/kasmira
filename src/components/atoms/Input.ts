interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
}

const Input = ({ label, placeholder, type = 'text' }: InputProps) => `
  <div class="jungle-input">
    ${label ? `<label>${label}</label>` : ""}
    <input placeholder="${placeholder}" type="${type}" />
  </div>
`;

export default Input;
