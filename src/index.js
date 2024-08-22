import app from "./app.js";
import connectDB from "./db/database.js";
import "dotenv/config";
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log("🚀 Server is running at port :", PORT))
  )
  .catch((error) => console.log("⛔ DB Connection failed"));
