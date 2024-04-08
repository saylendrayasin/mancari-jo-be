import express from 'express';

const RouterPublic = express.Router();

RouterPublic.get('/', (req, res) =>
  res.json({
    status: true,
    message: 'Welcome to public router',
  })
);

export default RouterPublic;
