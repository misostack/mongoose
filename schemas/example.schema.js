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

// add hooks
exampleSchema.pre("validate", function (next) {
  console.log("doc:pre:validate", this);
  // update
  next();
});
// preSave
const preSaveHook = (doc, next) => {
  console.log("doc:pre:save", doc);
  doc.updatedAt = new Date();
  // update
  next();
};

exampleSchema.pre("save", function (next) {
  preSaveHook(this, next);
});
exampleSchema.pre("updateOne", function (next) {
  console.log("doc:pre:updateOne", this);
  // update
  next();
});

exampleSchema.post("validate", (doc) => {
  console.log("doc:post:validate", doc);
  // update
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = {
  exampleSchema,
  Example,
};
