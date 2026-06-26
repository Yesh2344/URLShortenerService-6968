import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './main';

describe('App', () => {
  it('should shorten URL', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Enter URL to shorten');
    const button = getByText('Shorten URL');
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByText('Shortened URL:')).toBeInTheDocument();
    });
  });

  it('should get original URL', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Enter URL to shorten');
    const button = getByText('Shorten URL');
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByText('Shortened URL:')).toBeInTheDocument();
    });
    const getOriginalButton = getByText('Get Original URL');
    fireEvent.click(getOriginalButton);
    await waitFor(() => {
      expect(getByText('Original URL:')).toBeInTheDocument();
    });
  });
});