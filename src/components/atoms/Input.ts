interface Input {
  label?: string
  placeholder: string
}


export default (props: Input) => `
${ props.label ? `<label>${props.label}</label>` : `` }
<input placeholder="${props.placeholder}" />
`
