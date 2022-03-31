const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    ISBN: String,
    stock: Number,
    author: String,
    description: String,
    category: {
      type: String,
      //   lowercase: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    borrowed: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
