import express from 'express';
import cors from 'cors';  // Import cors
import { StringCalculator } from './stringCalculator';

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.post('/add', (req, res) => {
  const { numbers } = req.body;
  const calculator = new StringCalculator();

  try {
    const result = calculator.add(numbers);
    res.json({ result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
