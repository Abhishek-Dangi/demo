// require mongoose

import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const SubCategorySchema = mongoose.Schema({
    _id: Number,
    catname: {
        type: String,
        required: [true, "Category name is required"],
        lowercase: true,
        trim: true,
    },
    subcatname: {
        type: String,
        required: [true, "Sub Category name is required"],
        lowercase: true,
        unique: true,
        trim: true,
    },
    subcaticonname: {
        type: String,
        required: [true, "Sub Category icon is required"],
        trim: true
    },

});

// apply the uniquevalidator plugin to registerschema.
SubCategorySchema.plugin(uniqueValidator);


// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcat_tmp', SubCategorySchema, 'subcategory');

export default SubCategorySchemaModel;
