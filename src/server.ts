import App from "./app";
import IndexRoute from "./routes/index.route";

require("dotenv").config();

const app = new App([new IndexRoute()]);

app.listen();
