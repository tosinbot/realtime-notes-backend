const { searchQuestionsByParam } = require("../services/questionsFinder");

const searchByQueryParam = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(500).json({ message: 'Enter a valid topic to search' });

    const questions = await searchQuestionsByParam(q);
    res.status(200).json({ questions });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = {
  searchByQueryParam
};
