# URL Shortener Service
[![Build Status](https://travis-ci.org/username/URLShortenerService.svg?branch=main)](https://travis-ci.org/username/URLShortenerService)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A production-ready URL shortener service built with React.

## Installation

1. Clone the repository: `git clone https://github.com/username/URLShortenerService.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the development server: `npm start`

## Usage

1. Open `http://localhost:3000` in your browser
2. Enter a URL to shorten
3. Click the "Shorten" button
4. Copy the shortened URL

## API Documentation

### Shorten URL

* **Endpoint:** `/api/shorten`
* **Method:** `POST`
* **Request Body:** `{ url: string }`
* **Response:** `{ shortenedUrl: string }`

### Get Original URL

* **Endpoint:** `/api/original`
* **Method:** `GET`
* **Request Params:** `shortenedUrl: string`
* **Response:** `{ originalUrl: string }`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.