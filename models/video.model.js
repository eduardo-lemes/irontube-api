const { Schema, model } = require("mongoose");

const videoSchema = new Schema(
  {
    videoURL: {
      type: String,
    },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    userImage: { type: Schema.Types.userimageURL, ref: "user" },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = model("video", videoSchema);
