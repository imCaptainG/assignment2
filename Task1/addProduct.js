const mongoose = require('mongoose');
const Product = require('./models/product'); // Import your Product model

// Replace with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://CaptainG:PCkRrVGUz9WEzNvV@cluster0.axag1mc.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a new product instance
const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,  
});

// Save the new product to the database
newProduct.save()
  .then((savedProduct) => {
    console.log('Product saved:', savedProduct);
    mongoose.connection.close(); // Close the database connection
  })
  .catch((error) => {
    console.error('Error saving product:', error);
    mongoose.connection.close(); // Close the database connection
  });
