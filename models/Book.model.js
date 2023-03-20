const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookSchema = new Schema(
  {
    
  }, 
  {
    timestamps: true
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
