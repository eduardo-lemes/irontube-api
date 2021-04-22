const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: { 
      type: Schema.Types.ObjectId, 
      ref: "user" 
    },
    comment: {
      type: String,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "video"
    }
  },
  { timestamp: true }
);

module.exports = model("comment", commentSchema);
