// const express = require('express');
// const sendEmail = require('./src/utils/sendEmail');
// const connectDB = require('./src/config/db').connectDB;
// const startScheduler = require('./src/utils/scheduleMail');
// const email = require('./src/models/email');
// const emailRoutes = require('./src/routes/emailRoutes');
// const app = express();


// const dotenv = require('dotenv');
// dotenv.config();

// const PORT = process.env.PORT


// app.use(express.json());
// app.use('/api/email', emailRoutes);

// connectDB();



// startScheduler();

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db').connectDB;
const startScheduler = require('./src/utils/scheduleMail');
const emailRoutes = require('./src/routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/email', emailRoutes);

connectDB()
  .then(() => {
    startScheduler();
    console.log('Scheduler started');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server:', err);
  });
