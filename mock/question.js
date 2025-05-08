const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./getQuestionList')
module.exports = [

    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {

                data: {
                    id: Random.id(),
                    title: Random.title()
                },

            }
        }
    },
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            console.log(ctx.url)
            const { url = '' } = ctx
            const isDeleted = ctx.url.indexOf('isDeleted=true') >= 0
            const isStar = ctx.url.indexOf('isStar=true') >= 0
            console.log(isDeleted, isStar)
            return {
                errno: 0,
                data: {
                    list: getQuestionList({ isDeleted, isStar }),
                    total: 100
                }
            }
        }
    },

]