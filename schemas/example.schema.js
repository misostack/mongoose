const mongoose = require("mongoose");
const { Schema } = mongoose;

const exampleSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 75 },
    content: { type: String, required: true },
    description: { type: String, required: true, maxLength: 160 },
    slug: { type: String, required: true },
    status: {
      type: String,
      enum: {
        values: ["pending", "published", "archived"],
      },
      required: false,
      default: "pending",
    },
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
