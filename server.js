const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan') //middleware
const dbConnection = require('./config/database')
const categoryRoute = require('./routes/categoryRoute')

dotenv.config({ path: 'config.env' });




// express app
const app = express();


// Middlewares
// this line will parse the json response
app.use(express.json());
// "process" lobal Object: This refers to a special object named process that
// provides information about the current Node.js process running your code.
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}




// Mount Routes
app.use("/api/v1/categories" , categoryRoute)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});