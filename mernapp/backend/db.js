const mongoose = require('mongoose');

async function mongoDB() {
  try {
    await mongoose.connect('mongodb+srv://sustainfood:food123@cluster0.ikelfbt.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports=mongoDB;
