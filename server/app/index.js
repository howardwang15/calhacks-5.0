const express = require('express');
const app = express();
const cors = require('cors');

const router = express.Router();

app.listen(3000, () => console.log('node server running on port 3000...'));