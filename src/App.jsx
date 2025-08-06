import { useState } from 'react'
import './App.css'
import heroImg from './assets/chip.svg';
import logoImg from './assets/logo.svg';
import one from './assets/1-1.png';
import two from './assets/1-2.png';
import three from './assets/1-3.png';
import four from './assets/1-4.png';
import five from './assets/1-5.png';
import two1 from './assets/2-1.png';
import two2 from './assets/2-2.png';
import two3 from './assets/2-3.png';
import two4 from './assets/2-4.png';
import two5 from './assets/2-5.png';
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
function App() {
  // const [count, setCount] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <div className='font-poppins overflow-hidden'>
      
      <div className="bg-[#09091B] 
      bg-gradient-to-r from-[#1b1b7a] via-[#09091B] to-[#1b1b7a]
      bg-gradient-to-br from-transparent via-[#09091B] to-transparent
      ">
      <div>
<nav className="bg-transparent px-4 pt-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src={logoImg} alt="logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Nav Buttons */}
        <div className="hidden md:flex gap-4 text-white">
          <button type="button" className="hover:text-gray-300 bg-white p-1 px-6 text-lg text-black border-white">Enquire</button>
          <button type="button" className="hover:text-gray-300 border p-1 px-6 text-lg border-white">Login</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-4 text-white items-start px-4">
          <button className="hover:text-gray-300 bg-white p-1 px-6 text-lg text-black border-white w-full text-left">
            Enquire
          </button>
          <button className="hover:text-gray-300 border p-1 px-6 text-lg border-white w-full text-left">
            Login
          </button>
        </div>
      )}
    </nav>

      </div>
      <div className="grid justify-center pe-0 items-center  ps-3 md:ps-10 lg:ps-30 grid-cols-1 md:grid-cols-2 md:gap-5 ">
      <div className="text-white flex-2 aspect-3/2 gap-1">
      <div className="grid flex-col grid-rows-3 inline-block pt-0 leading-loose ">
      
        <div className="text-white p-0 text-[50px] leading-snug mb-0 text-left inline-block ">
         Advanced ESD Monitoring for a Safer, Smarter, Static-Free Environment
        </div>
        <div className="text-white text-xl p-2 me-7 mb-0 text-left inline-block">
        Real-time monitoring for wrist straps, workstations, and grounding systems
        to prevent ESD events and ensure compliance with global standards.
        </div>
        <div className="text-white p-2 mb-0 mt-3 inline-block">
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
      <div className=" flex-1 text-white lg:pe-0 ">
      <img src={heroImg} alt="Hero" className="drop-shadow-[0_0_30px_#1b1b7a] brightness-100 saturate-150" />
      </div>
      </div>
      </div>
      <div className='pt-15 pb-7 px-3 md:px-15 bg-[#F7F8FB]'>
         <div className="grid  items-top  p-7 px-2 md:px-15 grid-cols-1 md:grid-cols-2  ">
      <div className='text-4xl font-medium text-[#100B39] ps-10 pt-4 '>
        About Vellore Semicon
      </div>
      <div className=' p-5 pe-7 text-lg/6 text-justify  space-y-4'>
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
        <div className=' flex-rows items-top   grid-rows-1 m-15   md:grid-rows-2 '>
        <div className='text-4xl mb-10 font-medium text-[#100B39] ps-10 '>
          We Offer
        </div>
        <div className=' lg:px-10 px-2 md:px-4 grid    justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-4'>
          
           <div className='border-2 flex-row justify-items-start items-center inline-block p-5 border-[#CBCBCB] rounded-3xl'>
            <p className='text-xl p-1 font-bold text-[#1126E4] '>01</p>
            <div className='font-semibold p-1 text-xl text-[#100B39]'>Live Monitoring & Alerts</div>
            <p className='text-[#33364F] p-1  '>
            Get real-time updates on ESD
            risks and device status.
            </p>
          </div>
          <div className='border-2 flex-row justify-items-start items-center inline-block p-5 border-[#CBCBCB] rounded-3xl'>
            <p className='text-xl p-1 font-bold text-[#1126E4] '>02</p>
            <div className='font-semibold p-1 text-xl text-[#100B39]'>Body Voltage Detection</div>
            <p className='text-[#33364F] p-1  '>
            Get real-time updates on ESD
            risks and device status.
            </p>
          </div>
          <div className='border-2 flex-row justify-items-start items-center inline-block p-5 border-[#CBCBCB] rounded-3xl'>
            <p className='text-xl p-1 font-bold text-[#1126E4] '>03</p>
            <div className='font-semibold p-1 text-xl text-[#100B39]'>Easy Compliance</div>
            <p className='text-[#33364F] p-1  '>
            Get real-time updates on ESD
            risks and device status.
            </p>
          </div>
          <div className='border-2 flex-row justify-items-start items-center inline-block p-5 border-[#CBCBCB] rounded-3xl'>
            <p className='text-xl p-1 font-bold text-[#1126E4] '>01</p>
            <div className='font-semibold p-1 text-xl text-[#100B39]'>Live Monitoring & Alerts</div>
            <p className='text-[#33364F] p-1  '>
            Get real-time updates on ESD
            risks and device status.
            </p>
          </div>
          </div>
      </div>
      </div>
      {/* Our True Client */}
      <div className='flex  justify-center items-center text-xl  p-3 '>    
        <div className='px-1 md:px-25 py-3'>
            <h2 className='text-4xl   text-center font-medium text-[#100B39] mb-4'>Our Trusted clients</h2>
            <div className="grid grid-cols-5 grid-rows-2 gap-4">            
               <div className=" p-4"><img src={one} alt="one" className="" /></div>
               <div className=" p-4"><img src={two} alt="two" className="" /></div>
               <div className=" p-4"><img src={three} alt="three" className="" /></div>
               <div className=" p-4"><img src={four} alt="four" className="" /></div>
               <div className=" p-4"><img src={five} alt="five" className="" /></div>
              <div className=" p-4"><img src={two1} alt="two1" className="" /></div>
              <div className=" p-4"><img src={two2} alt="two2" className="" /></div>
              <div className=" p-4"><img src={two3} alt="two3" className="" /></div>
              <div className=" p-4"><img src={two4} alt="two4" className="" /></div>
              <div className=" p-4"><img src={two5} alt="two5" className="" /></div>
            </div>
        </div>
        </div>
        {/* our contact */}
        <div className="grid flex  lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 lg:p-10 bg-[#F7F8FB]">
      {/* Left Column */}
      <div className="flex-1 px-2 md:px-25 p-4">
        <h2 className='text-4xl font-medium text-[#100B39] mb-4'>Contact Us</h2>
         <ul className="space-y-3">
      <li className="flex items-center gap-3">
        <div className='flex justify-items-center text-lg items-center'>
          <FaRegCircleCheck />
          </div> 
         
        <span className='text-lg'>Learn how Vellore Semicon can secure your facility</span>
      </li>
      
      <li className="flex items-center gap-3">
        <div className='flex justify-items-center text-lg items-center'>
          <FaRegCircleCheck />
          </div> 
         
        <span className='text-lg'>Find the right setup for your industry or zone</span>
      </li><li className="flex items-center gap-3">
        <div className='flex justify-items-center text-lg items-center'>
          <FaRegCircleCheck />
          </div> 
         
        <span className='text-lg'>Schedule a personalized product demo</span>
      </li>
    </ul>
      </div>
      {/* Right Column */}
      <div className="flex-1 mx-2  md:mx-25 ">
           <form className="space-y-5 ps-0 me-5 ">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border-2 border-[#B0B0B0] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your company name"
          />
        </div>
        {/* Mobile Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full border-2 border-[#B0B0B0] p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Id</label>
            <input
              type="email"
              className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* What can we help you with? */}
        <div>
          <label className="block text-sm font-medium mb-1">What can we help you with?</label>
          <textarea
            rows="4"
            className="w-full border-2 border-[#B0B0B0]  p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe your query"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-[#D66026]  text-white text-lg    px-6 py-1 "
        >
          Enquiry
        </button>
      </form>
      </div>
    </div>
    {/* footer */}
    <div>
      <footer className="bg-[#09091B] text-white p-5 ">
      {/* Row 1 */}
      {/* Row 2 */}
      <div className="grid px-2 md:px-25 py-5 md:grid-cols-3 gap-15 ">
        <div> 
          <h2 className="text-xl flex-col justify-item-start items-top px-6  font-semibold">
            <img src={logoImg} alt="logo" className="" />
            <p className="text-[15px] px-10 font-normal ps-12 ">Advanced ESD Monitoring for a
              Static-Free Environment
            </p>
          </h2>
        </div>
        <div className='flex flex-col items-start md:items-center'>
          <h3 className="font-normal text-lg text-white mb-2">Contact Us</h3>

              <div className='flex flex-col gap-3 md:grid-cols-3 px-14'>
                
                <div className='flex gap-3 text-start '>
                <FaLocationDot className="text-white text-start   pb-2 text-[40px]" />
                <p>235, Binnamangala, II Floor, 13th
                Cross Road, 2nd Stage, Indiranagar,
                Bangalore North, 
                Bangalore -
                560038, Karnataka
                </p>
                </div>
                <div className='flex ps-0 ms-0 text-start '>
                <FaPhone className="text-white text-start ps-0 pt-2  text-[25px]" />
                <p>+91 9003124399
                </p>
                </div>
                <div className='flex ps-0 text-start'>
                <IoMail className="text-white text-start pt-2 text-[25px]" />
                <p>info@velloresemicon.com
                </p>
                </div>
              
                
              </div>
              
              </div>
              <div className='flex flex-col items-start md:items-center'>
          <h3 className="font-normal text-lg text-white mb-2">Connect With Us</h3>
              <div className='flex flex-row gap-3 md:grid-rows-5 px-14'>
                <div className='flex  justify-item-center items-center'>
                  
                  <FaLinkedin className='text-2xl'/>
                  </div>
                 <div className='flex  justify-item-center items-center'>
                  
                  <IoLogoFacebook  className='text-2xl'/>
                  </div>
                  <div className='flex  justify-item-center items-center'>
                  
                  <IoLogoInstagram className='text-2xl'/>
                  </div>
                  <div className='flex  justify-item-center items-center'>
                  
                  <FaTwitter className='text-2xl'/>
                  </div>
                  <div className='flex  justify-item-center items-center'>
                  
                  <FaGlobe className='text-2xl ' />
                  </div>
              </div>
              </div>
{/*        
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>FAQs</li>
          </ul>
        </div> */}
     
      </div>

      {/* Row 3: Social Icons */}
      {/* <div className="flex justify-center items-center gap-6 mt-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/google.png" alt="Google" className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
        </a>
      </div> */}
    </footer>
    </div>
    </div>
          
    </>
  )
}

export default App
