import React, { useState } from "react";

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing Plans
  const plans = [
    {
      title: "Basic Plan",
      description: "Best for beginners to start their fitness journey.",
      monthly: 500,
      yearly: 50000,
      features: [
        { text: "Access to basic equipment", included: true },
        { text: "One personal training session", included: true },
        { text: "Dietary consultation", included: false },
        { text: "Access to premium classes", included: false },
      ],
    },
    {
      title: "Standard Plan",
      description: "Perfect for fitness enthusiasts looking for better results.",
      monthly: 900,
      yearly: 45000,
      features: [
        { text: "Access to all equipment", included: true },
        { text: "Three personal training sessions", included: true },
        { text: "Dietary consultation", included: true },
        { text: "Access to premium classes", included: false },
      ],
    },
    {
      title: "Premium Plan",
      description: "Best for serious athletes with professional coaching.",
      monthly: 300,
      yearly: 20000,
      features: [
        { text: "Access to all equipment", included: true },
        { text: "Unlimited personal training", included: true },
        { text: "Dietary consultation", included: true },
        { text: "Access to premium classes", included: true },
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-10 py-5 rounded-3xl font-semibold transition-all ${
              !isYearly ? "bg-purple-600  text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-10 py-5 rounded-3xl font-semibold transition-all ${
              isYearly ? "bg-purple-500 text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {plans.map((plan, index) => (
            <div key={index} className=" text-white p-6 rounded-xl shadow-lg bg-slate-600 border-slate-500 hover:border-blue-600 border-2 hover:scale-105 transition-transform">
              <h2 className="text-xl font-bold mb-2 text-white">{plan.title}</h2>
              <p className="text-sm text-blue-200 font-semibold font-serif ">{plan.description}</p>
              <p className="text-xl font-bold text-white  mt-3">
                {isYearly ? `₹${plan.yearly} / Year` : `₹${plan.monthly} / Month`}
              </p>

              <ul className="mt-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {feature.included ? (
                      <span className="text-green-500  w-6 h-6 rounded-full text-lg">✓</span>
                    ) : (
                      <span className="text-red-500 w-6 h-6 rounded-full text-lg ">✗</span>
                    )}
                    <span className="text-white  ">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-52 py-3  bg-purple-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
