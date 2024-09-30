import express from 'express';
import cors from 'cors';  // Import cors

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
