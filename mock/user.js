const Mock = require('mockjs')
const Random = Mock.Random
module.exports = [
    {
        // get user infomation
        url: '/api/user/info',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    username: Random.name(),
                    nickname: Random.cname()
                }
            }
        }
    },
    {
        // register 
        url: '/api/user/register',
        method: 'post',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        // user login
        url: '/api/user/login',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    token: Random.word(32)
                }
            }
        }
    }
]
