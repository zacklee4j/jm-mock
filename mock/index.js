const test = require('./test')
const question = require('./question')
const user = require('./user')

// mock api list
const mockList = [
    ...test,
    ...question,
    ...user
]
module.exports = mockList