const express = require('express');
const multer = require('multer');
const app = express();

// Hardcoded token for simplicity. In a real application, use environment variables or a more secure storage mechanism.
const AUTH_TOKEN = 'your_token';

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 } // 10MB limit for file size
}).single('file'); // 'file' is the field name in the form

// Middleware to check for the token
const checkAuthToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(token == null) return res.status(401).send('Authorization token is required');

  if(token !== AUTH_TOKEN) {
    return res.status(403).send('Unauthorized access');
  }

  next(); // Proceed to the next middleware/function if the token matches
};

// Apply the token check globally or to specific routes
app.use(checkAuthToken);

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.status(400).send(err);
    } else {
      if(req.file == undefined){
        res.status(400).send('Error: No File Selected!');
      } else {
        res.send('File uploaded successfully');
      }
    }
  });
});

const PORT = 11430;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
