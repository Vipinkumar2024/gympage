import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Hexagon",
    feedback:
      "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended for anyone seeking top-notch service.",
    rating: 5,
  },
  {
    name: "FitLife User",
    feedback:
      "Amazing experience! The trainers are professional and the facilities are top-notch. I’ve seen a big improvement in my fitness levels.",
    rating: 4.5,
  },
  {
    name: "John Doe",
    feedback:
      "A great place to work out with modern equipment and friendly staff. The personalized programs really helped me achieve my goals.",
    rating: 4,
  },
  {
    name: "Emma Smith",
    feedback:
      "I love the community here. Everyone is supportive, and the group classes are both fun and effective.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    feedback:
      "One of the best fitness centers I have ever joined. The environment is motivating, and the staff is super helpful.",
    rating: 4.5,
  },
  {
    name: "Sophia Wilson",
    feedback:
      "I highly recommend this gym to anyone serious about their fitness journey. The expertise of trainers is unmatched!",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center mt-2">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400 text-lg" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={i} className="text-yellow-400 text-lg" />
        ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16  px-6">
      <h2 className="text-5xl font-bold text-center text-purple-600 mb-10">
        What Our Clients Say
      </h2>
      <p className="text-lg font-sans text-center text-white m-4">What people think about us</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <StarRating rating={testimonial.rating} />
            <p className="text-gray-300  text-sm font-extralight m-12 font-sarif ">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      <button className="m-5 px-10 py-4 border-2 border-white bg-purple-600 shodow-xl rounded-3xl hover:scale-105 transition-transform ">+ Add your opinion</button>
    </div>
  );
};

export default Testimonials;
