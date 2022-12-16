// require mongoose

import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const PropertySchema = mongoose.Schema({
    _id: Number,
    title: {
        type: String,
        required: [true, "Title name is required"],
        lowercase: true,
        trim: true,
    },
    subcatname: {
        type: String,
        required: [true, "Category name is required"],
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Descripition icon is required"],
        lowercase: true,
        trim: true,
    },

    piconname: {
        type: String,
        required: [true, "Property icon is required"],
        trim: true,
    },

});

// apply the uniquevalidator plugin to registerschema.
PropertySchema.plugin(uniqueValidator);


// compile schema to model
const PropertySchemaModel = mongoose.model('pro_tmp', PropertySchema, 'rentalproperty');

export default PropertySchemaModel;
