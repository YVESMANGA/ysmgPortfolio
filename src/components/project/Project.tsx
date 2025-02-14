import React from 'react'
import Title from '../title'
import { Github, Video } from 'lucide-react'

const projects = [
    {
        title: 'Mon Portfolio',
        description: "C'est juste un site internet, où j'ai fait étalage de mes compétences et où je présente mes différentes réalisations.", 
        technologies: ['NextJS', 'Tailwind CSS'],
        demoLink: 'https://ysmg-portfolio-acl57phmx-yves-projects-872299a2.vercel.app/',
        repoLink: 'https://github.com/YVESMANGA/ysmgPortfolio',
        image: 'SiteP.PNG',
    }
]

const Project = () => {
  return (
    <div className='p-5 md:px-[15%]' id='project'>
      <div className='mt-10'>
        <Title title='Mes Projets'/>

        <div>
          {projects.map((project, index) => (
            <div key={index} className='bg-base-300 p-5 h-fit rounded-xl shadow-lg'>
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full rounded-xl h-56 object-cover' 
              />

              <div>
                <h1 className='my-2 font-bold'>
                  {project.title}
                </h1>
                <p className='text-sm'>
                  {project.description}
                </p>
              </div>

              <div className='flex flex-wrap gap-2 my-3'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='badge badge-accent badge-sm'>
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <a href={project.demoLink} className='btn btn-accent'>
                  Demo 
                  <Video className='w-4' />
                </a>

                <a href={project.repoLink} className='btn btn-neutral w-1/3 ml-2'>
                  Github 
                  <Github className='w-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
