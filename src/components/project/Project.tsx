import React from 'react'
import Title from '../title'
import { Github, Video } from 'lucide-react'

const projects = [
    {
        title: 'Mon Portfolio',
        description: "C'est juste un site internet, où j'ai fait étalage de mes compétences et où je présente mes différentes réalisations.", 
        technologies: ['NextJS', 'Tailwind CSS'],
        demoLink: 'https://ysmg-portfolio.netlify.app/',
        repoLink: 'https://github.com/YVESMANGA/ysmgPortfolio',
        image: 'SiteP.PNG',
    },
    {
      title: 'Saoro Negoce',
      description: "Site Vitrine, d'une entreprise dans le BTP", 
      technologies: ['NextJS', 'Tailwind CSS'],
      demoLink: 'http://saoronegoce.com/',
      image: 'logos.JPG',
  },
  {
    title: 'Modexa',
    description: "Marketplace, permettant a d'autres boutiques, de renseigner leur produits.", 
    technologies: ['Laravel', 'Tailwind CSS'],
    demoLink: 'http://modexa.moda/',
    image: 'modexa.JPG',
  }
]

const Project = () => {
  return (
    <div className='p-5 md:px-[15%]' id='project'>
  <div className='mt-10'>
    <Title title='Mes Projets'/>

    {/* Grille responsive */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Project
