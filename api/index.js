const express = require('express');
const environment = require('../config/env');
const router = require('../api/routes/search');
const { connectDatabase } = require('../api/services/databaseService')

connectDatabase();

const app = express();
app.use(express.json());
app.use('/api/v1', router);


const { PORT } = environment;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
