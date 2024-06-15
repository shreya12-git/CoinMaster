import React from 'react';
import aboutusimg from '../assets/aboutus.png';
const AboutUsHome=()=>{
    return(
        <div className='ml-10 flex gap-6 mr-10'>
  <div className='image flex-1'>
    <img src={aboutusimg} alt='About Us' className='w-full h-full object-cover' />
  </div>
  <div className='text flex-1 flex flex-col justify-center'>
    <h1 className='font-bold text-center  text-3xl'>
      About Us
    </h1>
    <br></br>
    <p className='text-lg'>
    " At our core, we're transforming financial literacy by making finance accessible and engaging through interactive games, vibrant forums, and AI-driven learning. Our mission is to empower users with a deeper, more intuitive understanding of financial concepts. By integrating technology and interactive experiences, we simplify complex financial topics and make learning enjoyable. Our vibrant forums provide a supportive community where users can share insights and learn from each other. AI-driven learning personalizes the educational journey, ensuring content is tailored to each user's needs. Join us in navigating the world of money through dynamic, interactive experiences, and let's make understanding finance not just easy, but enjoyable. Together, we can revolutionize financial literacy and empower everyone to make informed financial decisions.."
    </p>
  </div>
</div>

    )
}
export default AboutUsHome;