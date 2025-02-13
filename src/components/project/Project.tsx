import React from 'react'
import Title from '../title'
import { title } from 'process'
import { Github, Video } from 'lucide-react'

const projects = [
    {
        title: 'Mon Portfolio',
        Description: "C'est juste un site internet, ou j'ai fais etalage de e mes competences et ou je presente mes differentes realisations.", 
        technologies: ['NextJS', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: 'SiteP.PNG',
    }
]
const Project = () => {
  return (
    <div className='p-5 md:px-[15%]' id='project'>
    <div className='mt-10'>
        <Title title='Mes Projets'/>

        <div>
            { projects.map((project) =>(
                <div  className='bg-base-300 p-5 h-fit rounded-xl shadow-lg'>
                    <img src={project.image} alt={project.title} className='w-full rounded-xl h-56 object-cover' />

                    <div>
                        <h1 className='my-2 font-bold'>
                            {project.title}
                        </h1>
                        <p className='text-sm'>
                            {project.Description}
                        </p>

                    </div>
                    <div className='flex flex-wrap gap-2 my-3'>
                        {project.technologies.map((tech) => (
                            <span className='badge badge-accent badge-sm'>
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
            )) 

            }
        </div>
    </div>
    </div>
  )
}

export default Project