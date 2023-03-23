interface Input {
  placeholder: string
}


export default (props: Input) => `
<input placeholder="${props.placeholder}" />
`
