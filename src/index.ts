import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/', () => home)
    .get('/signup', () => signup)
    .get('/login', () => login)
    .get('/html', ({ html }) => html(home))
    .listen(8080)

