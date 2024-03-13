
import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
export default async function Home() {
   const projects = await getProjects();
  return (
    <div>
      <div className="py-10">
        <h1 className="text-7xl font-extrabold"> Project
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 big-clip-text text transparent bg-clip-text text-transparent">
        Viking</span>
        </h1>
        <p className= "mt-3 text xl text-white-600"> Welcome to the Community</p>
      </div>

      
      <div className="py-10 px-10 background-color: bg-zinc-400 " >
      <h1 className="text-5xl font-extrabold text-white">Services</h1>
      <div className ="mt-5 grid grid-cols-4 gap-8 " >
      { projects.map((project)=> (
        <div key={project._id} className="border border-gray-500 rounded-lg background-color: bg-zinc-100">
          {project.image && (
            < Image 
              src={project.image}
              alt={project.name}
              width={250}
              height={100}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className= "font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 big-clip-text text transparent bg-clip-text text-transparent">
             {project.name}</div>
          </div>  
      ))}
      </div>
      </div>
    </div>
  )
}
