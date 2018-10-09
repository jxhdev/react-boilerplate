const ENV = process.env.NODE_ENV || 'development';
let DATABASE_URL;
if(ENV === 'production') {
  DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost/rbp-db-prod'
} else if(ENV === 'test') {
  DATABASE_URL = 'postgresql://localhost/rbp-db-test';
} else {
  DATABASE_URL = 'postgresql://localhost/rbp-db-development';
}

module.exports = {
  ENV,
  DATABASE_URL
}
