const { Schema } = require('mongoose');

const topicSchema = new Schema({
  topicId: {
    type: Number,
    required: true,
    unique: true,
  },
  path: [String],
});

module.exports = topicSchema;
