import React, { useState } from "react";

const RestaurantReviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing food and service!" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Great place, but a bit pricey." },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rating > 0 && comment) {
      const newReview = {
        id: reviews.length + 1,
        name,
        rating,
        comment,
      };
      setReviews([newReview, ...reviews]);
      setName("");
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className="  p-6 bg-white  shadow-lg dark:bg-dark-contrast">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-100">Restaurant Reviews</h1>

   
      <form onSubmit={handleSubmit} className="mb-6 dark:text-gray-100">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border  rounded mb-2 dark:text-gray-100"
          required
        />

      
        <div className="mb-2 flex space-x-1 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write a review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        ></textarea>
        
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        >
          Submit Review
        </button>
      </form>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 w-150 border rounded-lg dark:bg-dark-contrast dark:text-gray-100 bg-gray-50">
            <h2 className="font-semibold">{review.name}</h2>
            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantReviews;
