import React from 'react';
import Footer from "../components/common/Footer";
import image1 from "../assets/Images/image1.png";
import image2 from "../assets/Images/image2.jpg";
import image3 from "../assets/Images/image3.webp";
import image4 from "../assets/Images/image4.jpg";
import image5 from "../assets/Images/image5.jpg";
import image6 from "../assets/Images/image6.jpg";
import image7 from "../assets/Images/image7.jpeg";
import image8 from "../assets/Images/image8.webp";
import image9 from "../assets/Images/image9.webp";

const pythonProjects = [
  {
    title: "AI-Powered Mental Health Bot",
    description: "A chatbot that provides mental health support using AI technology.",
    image: image1
  },
  {
    title: "Secure Banking System",
    description: "A secure banking application with OTP verification and various banking features.",
    image: image3
  },
  {
    title: "Personal Finance Tracker",
    description: "A tool to track and manage personal finances, including expenses and savings.",
    image: image5
  }
];

const jsProjects = [
  {
    title: "E-learning Platform",
    description: "An innovative platform for online education offering cutting-edge courses.",
    image: image2
  },
  {
    title: "Community Review Website",
    description: "A website where users can form a community to review different products and offer guidance.",
    image: image4
  },
  {
    title: "Recipe Sharing Platform",
    description: "A platform for users to share and discover new recipes.",
    image: image6
  }
];

const javaProjects = [
  {
    title: "Fitness Tracker",
    description: "An application to track workouts, monitor progress, and set fitness goals.",
    image: image7
  },
  {
    title: "Travel Itinerary Planner",
    description: "A tool to plan and organize travel itineraries, including activities and accommodations.",
    image: image8
  },
  {
    title: "Online Marketplace",
    description: "A platform for buying and selling products online with user reviews and ratings.",
    image: image9
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
      <img src={project.image} alt={project.title} className="w-full h-48 sm:h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div className="px-4 sm:px-10 py-10">
        <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 text-white">Our Learning Projects</h1>

        <h2 className="text-xl sm:text-3xl font-semibold my-8 sm:my-10 text-white">1. Python Projects</h2>
        <div className="flex flex-wrap -mx-4 sm:-mx-5 justify-center">
          {pythonProjects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-5 py-5">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-3xl font-semibold my-8 sm:my-10 text-white">2. JavaScript/React Projects</h2>
        <div className="flex flex-wrap -mx-4 sm:-mx-5 justify-center">
          {jsProjects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-5 py-5">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-3xl font-semibold my-8 sm:my-10 text-white">3. Java Projects</h2>
        <div className="flex flex-wrap -mx-4 sm:-mx-5 justify-center">
          {javaProjects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-5 py-5">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;