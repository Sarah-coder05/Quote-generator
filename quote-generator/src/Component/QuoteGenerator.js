import React, { useState } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Oops! Something went wrong. Please try again.');
      setAuthor('');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">Random Quote Generator</h1>
      <div className="quote-container">
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <>
            <p className="quote-text">"{quote}"</p>
            <p className="author-text">- {author}</p>
          </>
        )}
      </div>
      <button onClick={fetchQuote} className="button">
        Get New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
