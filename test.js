const mongoose = require("mongoose");
const { Example } = require("./schemas/index.js");
const { v4 } = require("uuid");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongoose");
  // test create new example
  const example = new Example({
    title: "Test",
    description: "lorem ipsum",
    content: "favorite content",
    slug: v4(),
  });
  example.save((error, doc) => {
    if (error) {
      throw new Error(error);
    }
    console.log(doc.toJSON());
  });
};

main()
  .then(() => {
    console.log("started");
  })
  .catch((e) => console.error(e));
