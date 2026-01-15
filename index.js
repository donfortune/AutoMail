const express = require('express');
const sendEmail = require('./src/utils/sendEmail');
const connectDB = require('./src/config/db').connectDB;
const email = require('./src/models/email');
const emailRoutes = require('./src/routes/emailRoutes');
const app = express();


const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT


app.use(express.json());
app.use('/api/email', emailRoutes);

connectDB();




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});