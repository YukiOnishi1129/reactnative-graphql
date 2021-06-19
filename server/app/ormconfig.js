require("dotenv").config(); // eslint-disable-line

module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/db/migrations/**/*.ts"],
  subscribers: ["src/db/subscribers/**/*.ts"],
  seeds: ["src/db/seeds/**/*{.ts,.js}"],
  factories: ["src/db/factories/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/db/migrations",
    subscribersDir: "src/db/subscribers",
  },
};
