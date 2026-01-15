const moongose = require('mongoose');
const env = require('dotenv');

env.config();

const db = moongose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
db.then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.error('Database connection error:', err);
});

module.exports = db;