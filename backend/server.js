const app = require("./src/app.js");
const connectdb = require("./src/db/db.js")
const PORT = 4000;

require("dotenv").config()

connectdb()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
