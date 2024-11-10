// Routes


const express = require('express');
const router = express.Router();

const {getCategories} = require('../services_businessLogic/categoryServices');

// 3. Use Model (will use it like routes)
// but this route will return error if we don't parse it
// we put this(parsing command) line in middleware section
router.get('/', getCategories);

module.exports = router;


// app.get('/', (req, res) => {
//     res.send('Our API V3');
// });