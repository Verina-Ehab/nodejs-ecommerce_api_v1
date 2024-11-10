// Connect with db

const mongoose = require('mongoose') //mongo dashboard manager

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL).then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
    }).catch((err) => {
        console.error(`Database Error: ${err}`)
        process.exit(1);
    });
};

module.exports = dbConnection;