const { Schema } = require('mongoose');

const questionSchema = new Schema({
  questionNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  annotations: [String],
});

module.exports = questionSchema;
