import React from 'react';
import { FaHeartbeat, FaMandalorian, FaPlay, FaRunning } from "react-icons/fa";
import 'animate.css';
import bannerTop from '../assets/bannertop.png';
import img1 from '../assets/wcu1.jpg';
import img2 from '../assets/wcu2.jpg';
import img3 from '../assets/wcu3.jpg';

import { GrCertificate } from "react-icons/gr";
import { IoPeopleSharp } from "react-icons/io5";
import { FaThumbsUp, FaUserShield, FaDumbbell, FaRegSmile, FaChartLine } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import A1 from '../assets/A.jpg'
import A2 from '../assets/B.jpg'
import A3 from '../assets/C.jpg'
import A4 from '../assets/D.jpg'
import A5 from '../assets/E.jpg'
import A6 from '../assets/F.jpg'
import Price from './Price';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Bainer = () => {
  const features = [
    { icon: <FaUserShield className="text-yellow-500 text-4xl mb-4" />, title: "Expert Trainers", description: "Highly qualified trainers to help you achieve your goals." },
    { icon: <FaDumbbell className="text-yellow-500 text-4xl mb-4" />, title: "Modern Equipment", description: "Top-tier gym equipment to enhance your workout." },
    { icon: <FaRegSmile className="text-yellow-500 text-4xl mb-4" />, title: "Happy Members", description: "Thousands of satisfied members with great results." },
    { icon: <FaChartLine className="text-yellow-500 text-4xl mb-4" />, title: "Proven Results", description: "We focus on real transformations and measurable results." },
  ];

  return (
    <>
      {/* Hero Section */}
      <div id="home" className="relative h-screen  bg-black flex flex-col lg:flex-row justify-center items-center overflow-hidden">

        {/* Left Side (Text on Image in Mobile View) */}
        <div className="relative w-full h-screen max-h-screen lg:w-1/2 flex justify-center items-center">
          {/* Background Image for Mobile */}
          <div className="absolute inset-0 bg-contain mt-10 bg-no-repeat bg-center lg:hidden" style={{ backgroundImage: `url(${bannerTop})` }}>
            <div className="absolute inset-0   bg-no-repeat bg-center/70" ></div> {/* Overlay */}
          </div>
     

          {/* Text Content */}
          <div className="relative z-10 px-6 sm:px-10 mt-32 lg:mt-3 lg:px-20 text-white text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 animate__animated animate__slideInLeft">
              Elevate your <span className="text-yellow-400">Workout</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-serif mb-6 animate__animated animate__slideInLeft">
              Welcome to Gym Summy, your ultimate fitness destination. Our state-of-the-art equipment and expert trainers are here to help you achieve your fitness goals.
            </p>

            {/* Features Section */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4 text-center lg:text-left animate__animated animate__fadeIn">
              {[
                { icon: FaDumbbell, text: "Strength Training" },
                { icon: FaHeartbeat, text: "Cardio Fitness" },
                { icon: FaRunning, text: "Endurance" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 group">
                  <item.icon className="text-yellow-500 text-lg sm:text-2xl transition-transform transform group-hover:rotate-12 group-hover:scale-110" />
                  <span className="text-xs sm:text-sm md:text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-110">
                Get Started
              </button>
              <button className="px-4 sm:px-5 py-2 sm:py-3 text-black flex flex-row items-center bg-white rounded-full shadow-md hover:bg-slate-500 gap-2">
                <FaPlay className="text-black text-lg sm:text-xl" /> Watch Demo
              </button>
            </div>
{/* social media */}
<div className="flex flex-row sm:flex-row  justify-center lg:justify-start    items-center   lg:items-start   gap-4 p-2">
      {/* Facebook */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-3xl hover:bg-blue-700 transition">
        <FaFacebook />
      </div>
      
      {/* Twitter */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-3xl hover:bg-blue-600 transition">
        <FaTwitter />
      </div>
      
      {/* Instagram */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-3xl hover:bg-red-600 transition">
        <FaInstagram />
      </div>
    </div>
          </div>
        </div>

        {/* Right Side Image (Only for Large Screens) */}
        <div className="hidden lg:flex justify-center items-center w-1/2 h-screen">
          <img src={bannerTop} alt="pic" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black py-32 sm:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
            {[
              { icon: FaMandalorian, text: "5+ Years of Service" },
              { icon: GrCertificate, text: "50+ Certified Trainers" },
              { icon: IoPeopleSharp, text: "10000+ Happy Members" },
              { icon: FaThumbsUp, text: "95% Customer Satisfaction" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4 animate-fadeIn delay-200">
                <item.icon className="text-yellow-500 text-3xl sm:text-4xl" />
                <span className="text-sm sm:text-lg md:text-xl font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-black py-16 text-white text-center">
        <div className="container mx-auto px-4 sm:px-8">
          <h1 className="text-2xl lg:text-3xl text-purple-500 font-serif font-bold mb-4">Why Choose Us</h1>
          <p className="text-lg lg:text-xl text-white font-serif mb-10">
            Discover why we stand out with quality, commitment, and results.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-300 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="flex flex-col items-center">
                  {feature.icon}
                  <h2 className="text-lg font-bold mt-2 text-black">{feature.title}</h2>
                  <p className="text-sm mt-2 text-black">{feature.description}</p>
                </div>
              </div>
            ))}


          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
  {/* Left Side (Two Images Centered, Takes Half Width) */}
  <div className="flex flex-col items-center space-y-8 w-full">
    <img src={img1} alt="First Image" className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform" />
    <img src={img2} alt="Second Image" className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform" />
  </div>

  {/* Right Side (One Image Centered, Takes Half Width) */}
  <div className="flex justify-center items-center w-full">
    <img src={img3} alt="Third Image" className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform" />
  </div>
</div>


        </div>
 {/* meet our trainer */}
 <div id='trainer' className="bg-black py-32 mt-20 sm:py-16 text-white">
  <h1 className='text-center text-4xl  m-2 lg:m-5 text-blue-400 font-serif font-bold'>MEET OUR TRAINER</h1>
  <p className='text-lg text-white  text-center lg:text-center mx-5 lg:mx-72  my-5'>Our professional trainers are here to inspire and guide you on your fitness journey, ensuring you achieve your goals with confidence and care.</p>
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
<img src={A1} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>
<img src={A2} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>
<img src={A3} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>
<img src={A4} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>
<img src={A5} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>
<img src={A6} className='w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform'/>

          </div>
          </div>
          </div>



          {/* Pricing Plans */}
          <h1 className='text-center text-5xl text-purple-500 font-serif font-bold '>Pricing Plains</h1>
          <p className='text-center text-lg text-white'>Choose the plan that fits you best</p>
          <Price/>
        <div  id='opinion' >
        < Testimonials />
        </div>
{/* contact us */}
<div id='contact'>
  <Contact/>

</div>
        
      </div>

      <footer className= "  bg-slate-900 text-white py-6 text-center border-t-2  border-black shadow-3xl ">
      <p className="text-sm">&copy; 2025 FitLife Gym. All rights reserved.</p>
      <p className="text-sm">Designed by Vipin Kumar</p>
    </footer>

    </>
  );
};

export default Bainer;
