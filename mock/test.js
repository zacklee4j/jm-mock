const Mock = require('mockjs')
const Random = Mock.Random
module.exports = [

    {
        // test api,not to use
        url: '/api/test',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    name: Random.name()
                }
            }
        }
    },
]