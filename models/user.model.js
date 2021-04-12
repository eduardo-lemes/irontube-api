const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
    },

    videos: [{ type: Schema.Types.ObjectId, ref: "video" }], //One user for many videos
  },
  { timestamp: true }
);

module.exports = model("user", userSchema);
