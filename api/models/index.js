const { model } = require('mongoose');
const questionSchema = require('./question');
const topicSchema = require('./topic');

const QuestionModel = model('Questions', questionSchema);
const TopicModel = model('Topics', topicSchema);

module.exports = {
   QuestionModel,
   TopicModel,
};
