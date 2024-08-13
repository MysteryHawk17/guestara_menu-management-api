import express from 'express';

// Import other routes here

const app = express();

app.use(express.json());

// Use other routes here

app.get('/', (req, res) => {
  res.status(200).json({message:'Guestara API'});
});


export default app;
