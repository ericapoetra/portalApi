const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 30001;
const { routes } = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/SF", routes);

app.listen(PORT, (_) => {
  console.log(`THIS APP RUN AT PORT ${PORT}`);
});
