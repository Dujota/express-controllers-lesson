const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// Controllers
const catController = require('./controllers/catController');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors()); // allows us to control who will be able to send reqs to this api
app.use(express.json()); // parses json for us into js objects
app.use(express.urlencoded({ extended: false })); // parses form submissions for us into js objects

// API Routes
app.get('/api/cats', catController.index);
app.get('/api/cats/search', catController.search);
app.get('/api/cats/:id', catController.show);

// Routes
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});
