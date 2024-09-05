import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

// Activities 

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://bookstore-backend-f3z4.onrender.com/book");
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-5xl container mx-auto md:px-20 px-4">

      <div className='mt-24 flex flex-col items-center text-center '>
        <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
          {new Date().getFullYear()} READING CHALLENGE
        </h1>
        <br />
        <p className='mt-6 text-lg text-gray-700 dark:text-gray-300'>
          Welcome to the <span className='font-bold'> Reading Challenge</span>! We invite you to explore our handpicked selection of 12 diverse and inspiring books. Join our vibrant community, enjoy exclusive updates, and receive personalized recommendations. Embark on a journey through captivating stories and let your literary adventure begin!
        </p>

      </div>

      <div className='mt-16 bg-slate-300 dark:bg-slate-700 text-gray-900 dark:text-gray-100 py-12'>
        <div className="container mx-auto px-4">
          <h2 className='text-2xl md:text-3xl font-semibold text-center'>
            How to Participate?
          </h2>
          <ol className='mt-8 text-lg list-decimal list-inside'>
            <li className='mt-4'>
              <strong>Join the Challenge:</strong> Sign In for the Reading Challenge to unlock exclusive updates, bonus content, recommendations, and receive a warm welcome to our vibrant reading community.
            </li>
            <li className='mt-4'>
              <strong>Connect & Discuss:</strong> Dive into our vibrant online community, participate in meetups, and connect with readers nationwide. Join lively discussions and forge lasting connections with fellow book enthusiasts. <Link to="/contact" className=' hover:underline'>Click here to write your review and make your voice heard.</Link>
            </li>
            <li className='mt-4'>
              <strong>Share Your Journey:</strong> Share your reading journey on social media using our #LitChallenge2024 hashtag. Connect with others who are part of the challenge, and celebrate the joy of reading together.
            </li>
          </ol>
        </div>
      </div>

      {/* Book Cards */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
