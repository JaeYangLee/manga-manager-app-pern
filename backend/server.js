const app = require("../backend/server");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen((PORT) => {
  console.log(`Server Running On http:://localhost/${PORT}`);
});
