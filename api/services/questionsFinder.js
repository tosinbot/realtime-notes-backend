const { QuestionModel, TopicModel } = require("../models");

const getSearchedTopics = (topics, query) => {
    if(!topics) throw new Error('No topics to search from');
    const searchedTopics = [];
    const topicPosition = topics[0].path.indexOf(query);

    topics.forEach(({ path }) => {
        const topicMatched = path.slice(topicPosition);
        topicMatched.forEach((topic) => {
            if (searchedTopics.indexOf(topic) === -1) {
                searchedTopics.push(topic);
            }
        })
    });
    return searchedTopics;
};

const searchQuestionsByParam = async (query) => {
    const questions = [];
    const topics = await TopicModel.find({path: query});

    if (topics.length > 0) {
        const searchedTopics = getSearchedTopics(topics, query);

        for (i in searchedTopics) {
            const topic = searchedTopics[i];
            const annotations = await QuestionModel.find({ annotations: topic });

            if (annotations.length > 0) {
                annotations.forEach(({ questionNumber }) => {
                    if (questions.indexOf(questionNumber) === -1) {
                        questions.push(questionNumber)
                    };
                });
            }
        }
    }
    return questions;
}

module.exports = {
    searchQuestionsByParam
};
