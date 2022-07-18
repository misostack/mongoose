const mongoose = require("mongoose");
const { Schema } = mongoose;

const exampleSchema = new Schema(
  {
    title: String,
    content: String,
    description: String,
    slug: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {}
);

const Example = mongoose.model("Example", exampleSchema);

module.exports = {
  exampleSchema,
  Example,
};
