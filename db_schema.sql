DROP DATABASE IF EXISTS  "rbp-db-test";
CREATE DATABASE "rbp-db-test";

DROP DATABASE IF EXISTS  "rbp-db-development";
CREATE DATABASE "rbp-db-development";
\c "rbp-db-development"

CREATE TABLE strings (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  timestamp TIMESTAMP default CURRENT_TIMESTAMP
);

\q
