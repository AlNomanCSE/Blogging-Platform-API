import { asyncHandler } from "../utils/asyncHandler.js";

const registerTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    messgae: "ok",
  });
});

export { registerTask };
