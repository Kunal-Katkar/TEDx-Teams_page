import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaArrowUp } from "react-icons/fa";
import Akarsh from "./assets/team/Akarsh.jpeg";
import Anushkha from "./assets/team/Anushka.jpeg";
import Deepak from "./assets/team/Deepak.jpeg";
import Hemanth from "./assets/team/Hemanth .jpg";
import Hritik from "./assets/team/hritik.jpeg";
import Kunal from "./assets/team/Kunal.jpeg";
import Nancy from "./assets/team/Nancy.jpeg";
import Nihar from "./assets/team/Nihar.jpeg";
import Rakesh from "./assets/team/Rakesh.jpeg";
import Sarthak from "./assets/team/Sarthak.jpeg";
import Sudeep from "./assets/team/Sudeep.jpeg";
import Vartika from "./assets/team/Vartika.jpg";
import Vibhu from "./assets/team/Vibhu.jpg";
import Violina from "./assets/team/violina.jpeg";

import img1 from "./assets/gallery/1.jpg";
import img2 from "./assets/gallery/2.jpg";
import img3 from "./assets/gallery/3.jpg";
import img4 from "./assets/gallery/4.jpg";
import img5 from "./assets/gallery/5.jpg";
import img6 from "./assets/gallery/6.jpg";
import banner from "./assets/gallery/Banner.png";
import logo from "./assets/gallery/tedx-white.png"


const galleryImages = [img1, img2, img3, img4, img5, img6];

const TeamPage = () => {
  const teamMembers = [
    { name: "Vibhu Varshney", role: "Team Lead", imageUrl: Vibhu, linkedinUrl: "https://www.linkedin.com/in/vibhuvarshney081103/", instagramUrl: "https://www.instagram.com/vibhuvarshney_/" },
    { name: "Violina Doley", role: "Advisor", imageUrl: Violina, linkedinUrl: "https://www.linkedin.com/in/violinadoley/", instagramUrl: "https://www.instagram.com/violina_doley/" },
    { name: "Vartika Rao", role: "Advisor", imageUrl: Vartika, linkedinUrl: "https://www.linkedin.com/in/vartika-t-rao/", instagramUrl: "https://www.instagram.com/tedxnitksurathkal/" },
    { name: "Anushkha Das", role: "Creative Head", imageUrl: Anushkha, linkedinUrl: "https://in.linkedin.com/in/anushkadas09", instagramUrl: "https://www.instagram.com/____nush____?igsh=dTk4YXdyMDlnb3c4&utm_source=qr" },
    { name: "Hritik Sarraf", role: "Head Of Web", imageUrl: Hritik, linkedinUrl: "https://www.linkedin.com/in/hritik-sarraf-333099250/", instagramUrl: "https://www.instagram.com/hritiksharraf/" },
    { name: "Hemanth Somanna", role: "Head Of Production", imageUrl: Hemanth, linkedinUrl: "https://www.linkedin.com/in/hemanth-somanna-b53310208/", instagramUrl: "https://www.instagram.com/hemantsomanna/" },
    { name: "Nancy", role: "Head Of Curation", imageUrl: Nancy, linkedinUrl: "https://www.linkedin.com/in/nancy-kumari-34927028a/", instagramUrl: "https://www.instagram.com/gupta_nancy26/" },
    { name: "Deepak C Nayak", role: "Head Of Production", imageUrl: Deepak, linkedinUrl: "https://www.linkedin.com/in/deepakcnayak/", instagramUrl: "https://www.instagram.com/deepakachu5114/" },
    { name: "Sarthak", role: "Head Of Curation", imageUrl: Sarthak, linkedinUrl: "https://www.linkedin.com/in/usarthak", instagramUrl: "https://www.instagram.com/usarthak_12?igsh=MXFzdXFvNDlkcXJzMQ==" },
    { name: "Rakesh Choudhary", role: "Head Of Operations", imageUrl: Rakesh, linkedinUrl: "https://www.linkedin.com/in/rakesh-choudhary-51320b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagramUrl: "https://www.instagram.com/the1.jxxt?utm_source=qr&igsh=MXZyMTAyZTh6NnU5MA==" },
    { name: "Nihar Damera", role: "Head Of Operations", imageUrl: Nihar, linkedinUrl: "https://in.linkedin.com/in/nihar-damera", instagramUrl: "https://www.instagram.com/nihar._.damera/" },
    { name: "Sudeep V", role: "Head Of Marketing", imageUrl: Sudeep, linkedinUrl: "https://www.linkedin.com/in/sudeep-v-1352b6268", instagramUrl: "https://www.instagram.com/sudeep_v_/" },
    { name: "Kunaal Joshi", role: "Head of Marketing", imageUrl: Kunal, linkedinUrl: "https://www.linkedin.com/in/kunaal-joshi/", instagramUrl: "https://www.instagram.com/tedxnitksurathkal/" },
    { name: "Akarsh Gupta", role: "Treasurer", imageUrl: Akarsh, linkedinUrl: "https://www.linkedin.com/in/akarsh-gupta-889425213/", instagramUrl: "https://www.instagram.com/_akarshgupta_/" },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Header Section */}
      <header
    className="relative h-72 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${banner})` }}
>
    {/* Banner Text */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">  {/* Optional dark overlay */}
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-white">The Team</h1>
    </div>

    {/* Bottom Navigation */}
    <nav className="absolute bottom-0 w-full flex justify-center">
        <ul className="flex justify-center items-center space-x-8 bg-white text-gray-800 py-3 px-16 shadow-lg rounded-t-[51px]">
            <li>
                <Link to="/" className="hover:text-red-500 font-semibold">Home</Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-red-500 font-semibold">About Us</Link>
            </li>
            <li>
                <Link to="/team" className="text-red-500 border-b-2 border-red-500 font-semibold">Team</Link>
            </li>
        </ul>
    </nav>
</header>




      {/* Team Section */}
      <section className="py-12 bg-gray-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
      MEET THE TEAM
      <span className="block h-1 w-16 bg-red-500 mx-auto mt-2"></span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-5">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-500 w-full max-w-[230px] sm:max-w-full mx-auto"
        >
          {/* Image */}
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-full h-[250px] object-cover border-b-2 border-red-500"
          />
          
          {/* Lower Section */}
          <div className="p-4 text-center bg-white group-hover:bg-red-500 transition duration-300">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition duration-300">
              {member.name}
            </h3>
            <p className="text-xs text-gray-600 group-hover:text-white transition duration-300">
              {member.role}
            </p>
            <div className="flex justify-center space-x-3 mt-3">
              {/* LinkedIn Icon */}
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-100 transition duration-300"
              >
                <FaLinkedin size={20} className="text-gray-600 hover:text-blue-600 transition duration-300" />
              </a>

              {/* Instagram Icon */}
              <a
                href={member.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full border border-gray-300 hover:border-pink-500 hover:bg-pink-100 transition duration-300"
              >
                <FaInstagram size={20} className="text-gray-600 hover:text-pink-500 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 mt-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* TEDx Section */}
    <div className="text-center md:text-left">
      <img src={logo} alt="TEDx Logo" className="w-28 mx-auto md:mx-0 mb-4" />
      <p className="text-gray-400">
        Fostered by the vision of serving the student community with the most innovative and inspiring ideas.
      </p>
    </div>

    {/* Spread the Love Section */}
    <div className="text-center">
      <div className="relative inline-block mb-4">
        <h3 className="text-lg font-bold relative">
          SPREAD THE LOVE
        </h3>
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-red-500"></div>
      </div>

      <p className="text-gray-400 mt-4">
        We're on your favourite social media networks! Follow us on:
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com/tedxnitksurathkal2018/" target="_blank" rel="noopener noreferrer">
          <FaFacebook
            size={24}
            className="text-red-500 hover:text-[#1877F2] transition-colors duration-300 cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/tedxnitksurathkal/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            size={24}
            className="text-red-500 hover:text-[#d62976] transition-colors duration-300 cursor-pointer"
          />
        </a>
      </div>
      
    </div>

    {/* Gallery Section */}
    <div className="text-center md:text-left">
      <div className="relative inline-block mb-4">
        <h3 className="text-lg font-bold relative">
          GALLERY
        </h3>
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-red-500"></div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i + 1}`} className="w-full h-[80px] object-cover rounded-md" />
        ))}
      </div>
    </div>
  </div>

  {/* Footer Bottom Text */}
  <div className="bg-[#0b0b0b] text-gray-400   text-sm mt-6 py-6 flex flex-col items-center space-y-4">
    {/* Copyright Text */}
    <p className="text-center max-w-[800px] px-7">
      Copyright ©2025 All rights reserved | Made with ❤️ by TEDxNITKSurathkal | This independent TEDx event
      is operated under license from TED.
    </p>

    {/* Back to Top Button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-[#0b0b0b] text-gray-400 hover:text-white border border-gray-600 rounded-full px-4 py-2 flex items-center space-x-2 transition-colors duration-300"
    >
      <span>Back to Top</span>
      <span>↑</span>
    </button>
  </div>
  
</footer>



    </div>
  );
};

export default TeamPage;
