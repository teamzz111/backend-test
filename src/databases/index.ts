import { DB_HOST, DB_PORT, DB_DATABASE } from "../config/index";
console.log(DB_HOST);
export const dbConnection = {
  url: `${DB_HOST}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
