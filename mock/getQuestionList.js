/**
 * @description generate QuestionList
 * @author JM
 */
const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt) {
    const { length = 10, isDeleted, isStar } = opt
    const qList = []
    for (let i = 0; i < length; i++) {
        qList.push({
            id: Random.id(),
            title: Random.title(),
            isPublish: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),
            createTime: Random.datetime(),
            isDeleted
        })
    }
    return qList
}
module.exports = getQuestionList
