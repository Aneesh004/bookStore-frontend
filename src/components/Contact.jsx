import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

// READER'S POINT

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };

    return (
        <div
            className={`min-h-screen flex flex-col justify-center items-center text-gray-800 p-6 ${submitted ? 'bg-cover bg-center' : 'bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400'
                }`}
            style={{
                backgroundImage: submitted ? 'url("https://static.vecteezy.com/system/resources/previews/030/337/265/non_2x/ai-generative-world-smile-day-concept-yellow-smiley-face-background-free-photo.jpg")' : undefined
            }}
        >
            {!submitted ? (
                <>
                    <h2 className="text-4xl font-extrabold text-center mb-8 text-black">Contribute to Our Community: Share Your Book Review</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-2xl space-y-6 bg-slate-50 p-8 rounded-lg shadow-lg"
                    >
                        {/* Name */}
                        <div>
                            <label className='block text-lg font-semibold mb-2' htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Enter your name'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className='block text-lg font-semibold mb-2' htmlFor="bookName">Book Name</label>
                            <input
                                type="text"
                                id="bookName"
                                placeholder='Enter the name of the book'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                {...register("bookName", { required: true })}
                            />
                            {errors.bookName && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Review */}
                        <div>
                            <label className='block text-lg font-semibold mb-2' htmlFor="review">Your Review</label>
                            <textarea
                                id="review"
                                placeholder='Share your thoughts on the book'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                rows={6}
                                {...register("review", { required: true })}
                            />
                            {errors.review && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Submit Button */}
                        <div className='flex flex-col items-center'>
                            <button
                                type="submit"
                                className='w-full max-w-sm bg-blue-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200'
                            >
                                Submit Review
                            </button>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <Link
                                to="/"
                                className='text-blue-500 hover:underline transition duration-200 text-lg'
                            >
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-700">Thank You for Your Review!</h2>
                    <p className="text-lg mb-6">We appreciate your feedback and will review it shortly.</p>
                    <Link
                        to="/"
                        className='inline-block bg-gray-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-gray-700 transition duration-200'
                    >
                        Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Contact;
