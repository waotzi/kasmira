import Input from '../components/atoms/Input'
import BaseTemplate from '../components/templates/BaseTemplate'

const template = BaseTemplate(`
    <header>
        <h1>Kasmira</h1>
    </header>
    <nav>
        <ul>
            <li>
                <a href="/">home</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/login">login</a>
            </li>
        </ul>
    </nav>
    <main>
        ${Input({placeholder: 'kaspa address'})}
    </main>
`)

export default template 