const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router()


async function getResponse(fn, ctx) {
    return new Promise(
        resolve => {
            setTimeout(() => {
                const res = fn(ctx)
                return resolve(res)
            }, 1000)
        }
    )
}
// register mock service
mockList.forEach(item => {
    const { url, method, response } = item
    router[method](
        url, async ctx => {
            const res = await getResponse(response, ctx)
            ctx.body = res
        }
    )
}
)
app.use(router.routes())
app.listen(3001)