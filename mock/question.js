const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./getQuestionList')
module.exports = [

    {
        // get questioniare infomation
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {

                data: {
                    _id: Random.id(),
                    title: Random.title()
                },

            }
        }
    },
    {// add new questioniare
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    _id: Random.id()
                }
            }
        }
    },
    {
        // get questioniare list
        url: '/api/question',
        method: 'get',
        response(ctx) {
            console.log(ctx.url)
            const { url = '', query = {} } = ctx
            const isDeleted = ctx.url.indexOf('isDeleted=true') >= 0
            const isStar = ctx.url.indexOf('isStar=true') >= 0
            const page = parseInt(query.page)
            const pageSize = parseInt(query.pageSize)
            console.log(isDeleted, isStar)
            return {
                errno: 0,
                data: {
                    list: getQuestionList({ length: pageSize, isDeleted, isStar, page }),
                    total: 100
                }
            }
        }
    },
    {// update questioniare
        url: '/api/question/update/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {// duplicate questioniare
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    _id: Random.id()
                }
            }
        }
    },
    {// delete questioniare
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    },
]