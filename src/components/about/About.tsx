import React from 'react'
import Title from '../title'
import { CalendarSync, LetterText, Paintbrush, Section  } from 'lucide-react'


const aboutSections = [
    {
        id: 1,
        title: "Developpeur Frontend",
        description: "Je suis un developpeur frontend avec une bonne experience et maitrise des technologies liees a l'experience utilisateur",
        icon: <LetterText className='text-accent scale-150' />
    },
    {
        id: 2,
        title: "Developpeur Backend",
        description:"Je maitrise les base du backend me permettant de creer toutes sortes d'APIs.",
        icon: <LetterText className='text-accent scale-150' />
    },
    {
        id: 3,
        title: "Data Scientist",
        description:"",
        icon: <LetterText className='text-accent scale-150' />
    },

]
const About = () => {
  return (
    <div className='bg-myBlue p-10 mb-10 md:mb-32 ' id='about'>
        <Title title="A propos" />
        <div className='md:h-screen flex justify-center items-center'>

            <div className='md:ml-4 space-y-4'>
                {
                    aboutSections.map((Section) => (
                        <div key={Section.id}
                        className='flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl'>

                            <div className='mb-2 md:mb-0'>
                                {Section.icon}
                            </div>
                            <div className='md:ml-4 text-center md:text-left'>
                                <h2 className='text-xl font-bold mb-1'>{Section.title}</h2>
                                <p className='text-sm'>{Section.description}</p>
                                
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About
