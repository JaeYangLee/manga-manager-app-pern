require("dotenv").config();
const app = require("../backend/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On http://localhost:${PORT}`);
});
