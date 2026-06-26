import express from 'express';
import { config } from './config';
import { generateShortenedUrl } from './utils';

const app = express();

app.use(express.json());

app.post('/api/shorten', (req, res) => {
  const url = req.body.url;
  const shortenedUrl = generateShortenedUrl(url);
  res.json({ shortenedUrl });
});

app.get('/api/original/:shortenedUrl', (req, res) => {
  const shortenedUrl = req.params.shortenedUrl;
  // Replace with actual database logic
  const originalUrl = 'https://example.com';
  res.json({ originalUrl });
});

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});