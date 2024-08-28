import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Explore

function BookSearch() {
  const [bookName, setBookName] = useState('');
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setBookName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookName) return;

    setLoading(true);

    const searchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`;

    try {
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const book = data.docs[0];

      if (book) {
        const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(book.title)}+${encodeURIComponent(book.author_name ? book.author_name.join(', ') : '')}`;

        setBookDetails({
          title: book.title,
          author: book.author_name ? book.author_name.join(', ') : 'Unknown',
          year: book.first_publish_year,
          coverUrl,
          amazonUrl: amazonSearchUrl,
        });
      } else {
        setBookDetails(null);
        alert('Book not found');
      }
    } catch (error) {
      console.error('Error fetching book details:', error);
      alert('Failed to fetch book details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className='min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 p-6'
      style={{
        backgroundImage: 'url(https://images.alphacoders.com/132/1326370.png)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className='w-full max-w-md bg-blue-50 shadow-lg rounded-lg p-8 border border-black'
        style={{ 
          maxHeight: '90vh', 
          overflowY: 'auto', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add subtle shadow
          fontFamily: 'Georgia, serif', 
          lineHeight: '1.6',
          borderRadius: '12px'
        }}
      >
        <h1 className='text-2xl font-extrabold text-center mb-4 text-blue-900'>Embark on Your Literary Adventure</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <input
            type="text"
            value={bookName}
            onChange={handleInputChange}
            placeholder="Enter a title to learn more about the book..."
            className='w-full px-4 py-3 border border-slate-300 rounded-lg bg-blue-50 text-black mb-4 outline-none focus:ring-2 focus:ring-blue-600 transition duration-200'
          />
          <button
            type="submit"
            className='w-full bg-blue-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-200 flex items-center justify-center'
          >
            {loading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ 
                    animation: 'spin 1s linear infinite'
                  }}
                >
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  />
                  <path
                    d="M12 4V1l-2 2 2 2V4a8 8 0 0 0-8 8 8 8 0 0 0 8 8v-3l-2-2 2-2v3a6 6 0 0 1 0-12zm0 14a6 6 0 0 0 0-12v3l2 2-2 2v-3a4 4 0 0 1 0 8v-3l2-2-2-2v3z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-2 text-sm">Searching...</span>
              </div>
            ) : 'Submit'}
          </button>
        </form>
        {bookDetails && (
          <div className='mt-6 text-center'>
            <h2 className='text-xl font-semibold mb-2 text-gray-800'>{bookDetails.title}</h2>
            <p className='text-lg text-gray-600'>Author: {bookDetails.author}</p>
            <p className='text-lg text-gray-600'>Published Year: {bookDetails.year}</p>
            {bookDetails.coverUrl && (
              <img
                src={bookDetails.coverUrl}
                alt={bookDetails.title}
                className='mt-4 max-w-xs mx-auto rounded-lg shadow-md border border-gray-300'
              />
            )}
            <div className='mt-4'>
              <a 
                href={bookDetails.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block bg-yellow-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-yellow-600 transition duration-200'
              >
                Purchase on Amazon
              </a>
            </div>
          </div>
        )}
        <div className='mt-6 text-center'>
          <Link
            to="/"
            className='inline-block bg-blue-600 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-200'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookSearch;
