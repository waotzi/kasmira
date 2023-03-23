import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import home from './pages/home'

new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/', () => home)
    .get('/html', ({ html }) => html(home))
    .listen(8080)
