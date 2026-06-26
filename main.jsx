import React, { useState } from 'react';
import { shortenUrl, getOriginalUrl, generateShortenedUrl } from './utils';

const App = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');

  const handleShortenUrl = async () => {
    try {
      const shortenedUrlData = await shortenUrl(url);
      setShortenedUrl(shortenedUrlData.shortenedUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetOriginalUrl = async () => {
    try {
      const originalUrlData = await getOriginalUrl(shortenedUrl);
      setOriginalUrl(originalUrlData.originalUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>URL Shortener Service</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to shorten"
      />
      <button onClick={handleShortenUrl}>Shorten URL</button>
      <p>Shortened URL: {shortenedUrl}</p>
      <button onClick={handleGetOriginalUrl}>Get Original URL</button>
      <p>Original URL: {originalUrl}</p>
    </div>
  );
};

export default App;