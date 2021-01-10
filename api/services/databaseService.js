const mongoose = require('mongoose');
const { MONGODB_URL } = require('../../config/env');
const { QuestionModel, TopicModel } = require("../models");
const { questionsData, topicsData } = require('../../db/index');

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.info('Database connected!');

    const questions = await QuestionModel.find().catch((e) => console.error(e));
    const topics = await TopicModel.find().catch((e) => console.error(e));

    if (!questions.length) {
      const questionsData = getQuestionsData();
      insertQuestions = await QuestionModel.insertMany(questionsData, {
        ordered: true,
      });

      if (insertQuestions)
        console.info('Questions data loaded!')
    }

    if (!topics.length) {
      const topicsData = getTopicsData();
      insertTopics = await TopicModel.insertMany(topicsData, {
        ordered: true,
      });

      if (insertTopics)
        console.info('Topics data loaded!')
    }

  } catch (e) {
    console.error('Failed to connect to DB: ', e);
  }
}

const getQuestionsData = () => questionsData.map((question) => {
  let annotations = Object.values(question);
  const questionNumber = annotations.shift();
  annotations = annotations.map(str => str.trim());

  return {
    questionNumber,
    annotations: [...annotations],
  }
});

const getTopicsData = () => topicsData.map((topics, index) => {
  let path = Object.values(topics);
  path = path.map((str) => str.trim());

  return {
    topicId: index++,
    path: Object.values(topics),
  }
});


module.exports = {
  connectDatabase
}
