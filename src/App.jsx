import { useState } from 'react'
import './App.css'
import heroImg from './assets/chip.svg';
import logoImg from './assets/logo.svg';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <><div className=''>
      <div className="bg-[#09091B]">
      <div>
      <nav clasname="" > 
      <div className='" ps-8 me-auto max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"'>

      <div className="">
      <img src={logoImg} alt="logo" className="" />
      
      </div>
      <div className='text-white right-0 p-2 '>
        <div>
           <button
            type="button"
            className=""
      >
           
      <div>View notifications</div>
              
      </button>
        </div>
        <div>
          </div>
      
        </div>
      <button
            type="button"
            className=""
      >
           
      <div className='text-white '>View notifications</div>
              
      </button>
      </div>
      </nav>
     
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
      <div className="text-white   aspect-3/2 gap-1 ">
      <div className="grid grid-rows-3  inline-block mb-0 p-6">
      {/* <div className="text-white text-5xl mb-0 text-left  p-2 ">
        Advanced ESD Monit oring for a
        Safer, Smarter, Static-Free
        Environment
        </div>
      <div className=" text-white p-2 mb-0 ">Real-time monitoring for wrist straps, workstations, and grounding
        systems to prevent ESD events and ensure compliance with global
        standards.</div> */}
        <div className="text-white text-6xl mb-0 text-left p-2 inline-block">
         Advanced ESD Monitoring for a Safer, Smarter, Static-Free Environment
        </div>

        <div className="text-white p-2 mb-0 inline-block">
        Real-time monitoring for wrist straps, workstations, and grounding systems
        to prevent ESD events and ensure compliance with global standards.
        </div>

        <div className="text-white p-2 mb-0 inline-block">
        <button className="border-2 border-white text-white px-4 py-2 hover:bg-white hover:text-black transition">
        Know More
        </button>
        </div>
      
      {/* <div className="text-white text-6xl mb-0 text-left  p-2 ">
        Advanced ESD Monit oring for a
        Safer, Smarter, Static-Free
        Environment
      </div> */}
    </div>

    </div>

      <div className=" text-white pe-0 ">
       <img src={heroImg} alt="Hero" className=" " />
      </div>
      </div>
      </div> 
      <div className=''>

      </div>
      <div className="grid flex items-top m-20 p-7 px-10 grid-cols-1 md:grid-cols-2 p-1 ">
      <div className='text-4xl font-medium text-[#100B39] ps-10 pt-4 '>
        About Vellore Semicon
      </div>
      <div className=' p-5 text-lg/6 text-justify  space-y-4'>
        <p className=' ' >
          Vellore Semicon is a technology-driven company focused on delivering
        intelligent ESD (Electrostatic Discharge) monitoring solutions for industrial
        environments. We help electronics, pharmaceutical, aerospace, and
        cleanroom facilities maintain a static-safe workspace through real-time
        monitoring, data logging, and compliance automation. 
          
          </p>
          
         

        <p>
            Our mission is to simplify ESD control by combining advanced hardware
        with smart, user-friendly software — helping companies reduce risk,
        improve product reliability, and meet global safety standards.With a
        commitment to precision, safety, and innovation, Vellore Semicon
        empowers teams to detect, prevent, and control static discharge events
        before they cause costly damage.
          
          </p>
          
        
      </div>
      
      </div>
    </div>
          
    </>
  )
}

export default App
