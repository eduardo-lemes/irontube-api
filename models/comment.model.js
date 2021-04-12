const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },

    description: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = model("comment", commentSchema);
