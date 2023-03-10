//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PropertySchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true,"Title is required"],
    lowercase: true,
    trim: true,
  },
  subcatname: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true,"Description name is required"],
    lowercase: true,
    trim: true,
  },
  piconname: {
    type: String,
    required: [true,"Property icon is required"],
    trim: true
  },
});

// Apply the uniqueValidator plugin to RegisterSchema.
PropertySchema.plugin(uniqueValidator);

// compile schema to model
const PropertySchemaModel = mongoose.model('p_tmp', PropertySchema ,'rentalproperty');

export default PropertySchemaModel