import Input from '../components/atoms/Input'
import BaseTemplate from '../components/templates/BaseTemplate'

const template = BaseTemplate(`
  ${Input({label: 'login', placeholder: 'username'})}
`)

export default template 