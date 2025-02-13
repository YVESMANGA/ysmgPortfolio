import { Mail } from 'lucide-react'
import React from 'react'


const Home = () => {
  return (
    <div className='p-5 md:px-[15%]' id='home'>
    <div className='flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 '>

        <div className='flex flex-col'>
            
            <h1 className='text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0'>
                Bonjour, <br /> je suis {" "}
            </h1>

            <p className='my-4 text-md text-center md:text-left'>
                Je me nomme Jean Yves Manga <br />
                developpeur fullstack et data scientist
            </p>

            <a href="mailto:yvesmanga734@gmail.com.com" className='btn btn-accent md:w-fit'>
                <Mail className=''></Mail>Contactez-moi
            </a>
        </div>

        <div className='md:ml-60'> 
            <img src="94999497.jpeg" alt="" className='w-96 h-96 object-cover border-8 border-accent shadow-xl'
            style={{
                borderRadius : "34% 66% 64% 36% / 47% 53% 47% 53% "
            }}/>
        </div>

    </div>
    </div>
  )
}

export default Home