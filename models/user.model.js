const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 100,
    },
    name: {
      type: String,
      required: true,
      unique: false,
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
