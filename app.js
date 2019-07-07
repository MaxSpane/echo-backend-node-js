import express from 'express';
import cors from 'cors';
// import auth from './server/v1/routes/auth';

const app = express();

// JSON middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let versionNum = "0";
app.get('/api/v' + versionNum, (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to Echo API v1',
  });
});

// API Routes
// app.use('/api/v' + versionNum + '/auth', auth);

const port = process.env.PORT || 8000;

app.listen(port);

export default app;
