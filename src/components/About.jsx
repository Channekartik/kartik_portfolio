import React from 'react';
import '../App.css';
import { services } from '../constants.js';
import StarBorder from './Components/Contact.jsx/StarBorder/StarBorder.jsx';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Kartik Channe, a passionate Trainee Java Full Stack Developer 💻🚀 with a strong foundation in both frontend 🎨 and backend 🛠️ technologies. Skilled in Core Java, Spring Boot, Hibernate, and React.js, I enjoy crafting efficient, scalable, and user-friendly applications.
              <br />
              <br />
              
🎯 Skills: Java ☕ | Spring Boot 🌱 | Hibernate 🏛️ | React.js ⚛️ | MySQL 🗄️ | JavaScript ✨ | HTML & CSS 🎨
<br />
🚀 I'm always eager to learn, innovate, and grow in the tech space! Let's connect and collaborate 🤝 on exciting projects!</p>
<br />

<StarBorder
  as="a"
  href="https://drive.google.com/file/d/1hwCw-hdhWnbhauMucxmuPtCC3RVhB0uv/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-fit p-3 rounded-xl font-bold bg-gray-900 text-white shadow-md hover:bg-gray-800 transition-all duration-300"
  color="cyan"
  speed="5s"
>
  View Resume →
</StarBorder>


          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;