import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import home from './pages/home'
import login from './pages/login'

new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/', () => home)
    .get('/login', () => login)
    .get('/html', ({ html }) => html(home))
    .listen(8080)
