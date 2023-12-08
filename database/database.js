import { postgres } from "../deps.js";

let sql;
if (Deno.env.has("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
    hostname: "snuffleupagus.db.elephantsql.com",
    database: "ruqeaysp",
    user: "ruqeaysp",
    password: "DWkdDBKfjbMRPZF5gPpILm1c37FHArEB",
    port: 5432,
});
}

export { sql };