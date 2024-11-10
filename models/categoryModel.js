const mongoose = require('mongoose') //mongo dashboard manager


// 1.Create Shcema
const categorySchemea = new mongoose.Schema({
    name: String,
});
// 2.Create Model
const CategoryModel = new mongoose.model('Category', categorySchemea);

// 3.Routes to use this model in crud operations




module.exports = CategoryModel;