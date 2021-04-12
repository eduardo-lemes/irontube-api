const { Schema, model } = require("mongoose");

const playListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videos: [{ type: Schema.Types.ObjectId, ref: "video" }],
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamp: true }
);

module.exports = model("playList", playListSchema);
