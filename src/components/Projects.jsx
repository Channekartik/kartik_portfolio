
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'
import StarBorder from "./Components/Contact.jsx/StarBorder/StarBorder.jsx";
const ProjectCard = ({ image, title, description, git, technologies }) => {

    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='📚 E-Learning Platform' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='📜 Non-Criminal Certificate System' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <StarBorder
          as="a"
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-red-300 text-xs sm:text-sm rounded-lg p-2 hover:text-green-400 shadow transition-all duration-300"
          color="cyan"
          speed="5s"
        >
          GitHub
        </StarBorder>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-10 justify-center items-center m-9 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'📚 E-Learning Platform',
        description:'Built using Hibernate for smooth ORM mapping, featuring user registration, course management, and progress tracking.',
        image: vpn,
        git:'https://github.com/Channekartik',
        technologies:['Spring']
    },
    {
        title:'📜 Non-Criminal Certificate System',
        description:'Developed with HTML, CSS, JavaScript, PHP, and MySQL, ensuring an intuitive and interactive user experience.',
        image: copeople,
        git:"https://github.com/Channekartik/police-clearance-certificate",
        technologies:[ 'HTML', 'CSS', 'JavaScript',' PHP', ' MySQL']
    }
]

export default Projects
