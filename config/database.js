// ## sqlite
// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// mysql

// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 8889),
      database: env("DATABASE_NAME", "strapi4"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "root"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: true,
  },
});
