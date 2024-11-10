const CategoryModel = require('../models/categoryModel');

// function called "getCategories", I create export for it
exports.getCategories = (req, res) => {
    const name = req.body.name;
    console.log(name);

    const newCategory = new CategoryModel({ name });
    newCategory.save().then((doc) => { res.json(doc); }).catch((err) => { res.json(err); });
}


